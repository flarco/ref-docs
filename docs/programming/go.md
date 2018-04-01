# GO

---

[https://golang.org/doc/effective_go.html](https://golang.org/doc/effective_go.html)

## Keywords
Address: `&i` returns the address

Pointer: `*j` returns the value of the pointer

**Commands**
```go
break    default      func    interface    select
case     defer        go      map          struct
chan     else         goto    package      switch
const    fallthrough  if      range        type
continue for          import  return       var
```

## Control Flow
**Best Reference: <https://github.com/astaxie/build-web-application-with-golang/blob/master/en/02.3.md>**
### For Loop
```go
func main() {
	sum := 0
	for i := 0; i < 10; i++ {
		sum += i
	}
	fmt.Println(sum)
}
```

### While Loop
```go
func main() {
	sum := 1
	for sum < 1000 {
		sum += sum
	}
	fmt.Println(sum)
}
```
**Forever**
```go
for {
}
```

### IF
```go
if x < 0 {
  return sqrt(-x) + "i"
}
```

**IF with a Short statement**
```go
if v := math.Pow(x, n); v < lim {
  return v
}
```

**ELSE**
```go
	if v := math.Pow(x, n); v < lim {
		return v
	} else {
		fmt.Printf("%g >= %g\n", v, lim)
	}
```

### Switch / Case

```go
switch os := runtime.GOOS; os {
case "darwin":
  fmt.Println("OS X.")
case "linux":
  fmt.Println("Linux.")
default:
  // freebsd, openbsd,
  // plan9, windows...
  fmt.Printf("%s.", os)
}
```

**With no condition**
```go
switch {
case t.Hour() < 12:
  fmt.Println("Good morning!")
case t.Hour() < 17:
  fmt.Println("Good afternoon.")
default:
  fmt.Println("Good evening.")
}
```

### Defer
- A defer statement defers the execution of a function until the surrounding function returns.
- The deferred call's arguments are evaluated immediately, but the function call is not executed until the surrounding function returns.
- Deferred function calls are pushed onto a stack. When a function returns, its deferred calls are executed in last-in-first-out order.

```go
func main() {
	defer fmt.Println("world")
	defer fmt.Println("world2")
	defer fmt.Println("world3")

	fmt.Println("hello")
}

/* OUTPUT:
hello
world3
world2
world
*/

```

## Data Types
- Here are te basic types:
```go
bool

string

int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr

byte // alias for uint8

rune // alias for int32
     // represents a Unicode code point

float32 float64

complex64 complex128
```

### Constants
- Constants can be character, string, boolean, or numeric values.
- Constants cannot be declared using the := syntax.
```go
const Truth = true
```

```go
const (
	// Create a huge number by shifting a 1 bit left 100 places.
	// In other words, the binary number that is 1 followed by 100 zeroes.
	Big = 1 << 100
	// Shift it right again 99 places, so we end up with 1<<1, or 2.
	Small = Big >> 99
)
```

### Pointers
<http://stackoverflow.com/a/24623251/2295355>
<https://play.golang.org/p/u3sPpYLfz7>

```go
  i := 42
  fmt.Println(i) // prints '42': the value of i
  fmt.Println(&i) // prints for example '0x1040e0f8': the address of i
  fmt.Println(*i) // error! since an address in not stored in i
	fmt.Println(*&i) // prints '42': the value of of the address of i
	fmt.Println(&*&i) // prints for example '0x1040e0f8': the address of i
	fmt.Println(*&*&i) // prints '42':same loop
```

### Structs
```go
type Vertex struct {
	X int
	Y int
}

func main() {
	fmt.Println(Vertex{1, 2}) // X is 1, Y is 2
  v.X = 4 // X is now 4

	p := &v
	p.X = 1e9
	fmt.Println(p) // prints '&{1000000000 2}'
	fmt.Println(&p.X)  // prints '0x1040e0f8'
	fmt.Println(v)  // prints {1000000000 2}
}
```

#### JSON
```go
// Rider : A passenger or a Rider
type Rider struct {
	riderID        uint      `gorm:"primary_key"`
	Name           string    `json:"name"`
	Phone          string    `json:"phone"`
	DeviceID       string    `json:"device_id"`
	Email          string    `json:"email"`
	NotifToken     string    `json:"notif_token"`
	RegistrationDt int64     `json:"registration_dt"`
	CreatedAt      time.Time `json:"created_at"`
	UpdatedAt      time.Time `json:"updated_at"`
}

rider := &Rider{
	Name:           "",
	Phone:          phone,
	DeviceID:       deviceID,
	Email:          "",
	NotifToken:     "",
	RegistrationDt: timestamp,
	CreatedAt:      timeNow,
	UpdatedAt:      timeNow,
}

data := structs.Map(rider)
data2, err := json.MarshalIndent(data, "", "  ")
if err != nil {
	log.Fatal(stacktrace.Propagate(err, "Firebase failure: could not update user record for "+phone))
}

fmt.Print(string(data2))
var rider2 Rider
err = json.Unmarshal(data2, &rider2)
if err != nil {
	log.Fatal(stacktrace.Propagate(err, "Could not Unmarshal"))
}

println(strconv.FormatInt(timestamp, 10))
println(strconv.FormatInt(rider2.CreatedAt.UnixNano()/1000000, 10))
```

### Arrays
- An array has a fixed size.
```go
var a [2]string
a[0] = "Hello"
a[1] = "World"

primes := [6]int{2, 3, 5, 7, 11, 13}
q := []int{2, 3, 5, 7, 11, 13} // instantiated as array, stored in q as slice

```

### Slices
- A slice, on the other hand, is a dynamically-sized, flexible view into the elements of an array. In practice, slices are much more common than arrays.
- A slice does not store any data, it just describes a section of an underlying array.
- Changing the elements of a slice modifies the corresponding elements of its underlying array.
- Other slices that share the same underlying array will see those changes.
```go
primes := [6]int{2, 3, 5, 7, 11, 13}
var s []int = primes[2:4] // [5 7]
primes[0:4]  // [2 3 5 7]
primes[:4]  // [2 3 5 7]
primes[3:]  // [7, 11, 13]

s := []struct {
  i int
  b bool
}{
  {2, true},
  {3, false},
  {5, true},
  {7, true},
  {11, false},
  {13, true},
}
```

#### Range / Iteration
```go
var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}

for i, v := range pow {
  fmt.Printf("2**%d = %d\n", i, v)
}


mySlice := make([]uint8, 5)
for i := range mySlice {
  mySlice[i] = new(UselessStruct)
}
```

#### Slice length / capacity
```go
l := len(s)
c := cap(s)

// A nil slice has a length and capacity of 0 and has no underlying array.
var s []int
fmt.Println(s, len(s), cap(s))
if s == nil {
  fmt.Println("nil!")
}
```

```go
// Fill the array with zeros
a := make([]int, 5)
```

**Multi-Dimensional Slices**
```go
import (
	"fmt"
	"strings"
)

func main() {
	// Create a tic-tac-toe board.
	board := [][]string{
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
	}

	// The players take turns.
	board[0][0] = "X"
	board[2][2] = "O"
	board[1][2] = "X"
	board[1][0] = "O"
	board[0][2] = "X"

	for i := 0; i < len(board); i++ {
		fmt.Printf("%s\n", strings.Join(board[i], " "))
	}
}

```

**Appending**
```go
var s []int
append(s, 0)
```

### Maps
```go
type Vertex struct {
	Lat, Long float64
}

var m = map[string]Vertex{
	"Bell Labs": Vertex{
		40.68433, -74.39967,
	},
	"Google": Vertex{
		37.42202, -122.08408,
	},
}

var m = map[string]Vertex{
	"Bell Labs": {40.68433, -74.39967},
	"Google":    {37.42202, -122.08408},
}

func main() {
	m = make(map[string]Vertex)
	m["Bell Labs"] = Vertex{
		40.68433, -74.39967,
	}
	fmt.Println(m["Bell Labs"])
}
```

**If Key Exists**
```go
_, exists := dict["baz"]  // throw away the value to save memory

if value, exists := dict["baz"]; exists {
  fmt.Println("value: ", value)
} else {
  fmt.Println("key not found")
}

```

**Iteration**
```go
for key, value := range dict {
    fmt.Println("Key:", key, "Value:", value)
}
```

**Delete**
```go
delete(m, "key")
```

### Dates

**Converting date to String**

```go
package main

import (
    "fmt"
    "time"
)

// @link https://golang.org/pkg/time/

func main() {

    //caution : format string is `2006-01-02 15:04:05.000000000`
    current := time.Now()

    fmt.Println("origin : ", current.String())
    // origin :  2016-09-02 15:53:07.159994437 +0800 CST

    fmt.Println("mm-dd-yyyy : ", current.Format("01-02-2006"))
    // mm-dd-yyyy :  09-02-2016

    fmt.Println("yyyy-mm-dd : ", current.Format("2006-01-02"))
    // yyyy-mm-dd :  2016-09-02

    // separated by .
    fmt.Println("yyyy.mm.dd : ", current.Format("2006.01.02"))
    // yyyy.mm.dd :  2016.09.02

    fmt.Println("yyyy-mm-dd HH:mm:ss : ", current.Format("2006-01-02 15:04:05"))
    // yyyy-mm-dd HH:mm:ss :  2016-09-02 15:53:07

    // StampMicro
    fmt.Println("yyyy-mm-dd HH:mm:ss: ", current.Format("2006-01-02 15:04:05.000000"))
    // yyyy-mm-dd HH:mm:ss:  2016-09-02 15:53:07.159994

    //StampNano
    fmt.Println("yyyy-mm-dd HH:mm:ss: ", current.Format("2006-01-02 15:04:05.000000000"))
    // yyyy-mm-dd HH:mm:ss:  2016-09-02 15:53:07.159994437
}    
```

### Strings

**Concatenation**
```go
package main

import (
    "bytes"
    "fmt"
)

func main() {
    var buffer bytes.Buffer

    for i := 0; i < 1000; i++ {
        buffer.WriteString("a")
    }

    fmt.Println(buffer.String())
}
```

#### Convert int64 to string
```go
func strInt64(val int64) string {
	return strconv.FormatInt(val, 10) // int64 to string
}
```

#### Convert uint to string
```go
func strUint(val uint) string {
	return fmt.Sprint(val) //uint to string
}
```

**Split**
```go
strings.Fields(s)
```

**Convert to bytes**
```go
s := "hello" + "man"
c := []byte(s)  // convert string to []byte type
c[0] = 'c'
s2 := string(c)  // convert back to string type
fmt.Printf("%s\n", s2)
```

## Functions
```go
func WordCount(s string) map[string]int {
	return map[string]int{"x": 1}
}
```

```go
import (
	"fmt"
	"math"
)

func compute(fn func(float64, float64) float64) float64 {
	return fn(3, 4)
}

func main() {
	hypot := func(x, y float64) float64 {
		return math.Sqrt(x*x + y*y)
	}
	fmt.Println(hypot(5, 12))

	fmt.Println(compute(hypot))
	fmt.Println(compute(math.Pow))
}
```

#### Closures
```go
func adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}

func main() {
	pos, neg := adder(), adder()
	for i := 0; i < 10; i++ {
		fmt.Println(
			pos(i),
			neg(-2*i),
		)
	}
}

/*
outputs:
0 0
1 -2
3 -6
6 -12
10 -20
15 -30
21 -42
28 -56
36 -72
45 -90
*/
```

```go
func fibonacci() func() int {
	r:= 0
	last2 :=  [2]int{0, 0}
	return func() int {
		r = last2[0] + last2[1]
		last2[1]=last2[0]
		if last2[0] == 0 {
			last2[0] = 1
		} else {
			last2[0] = r
		}
		return r
	}
}

func main() {
	f := fibonacci()
	for i := 0; i < 10; i++ {
		fmt.Println(f())
	}
}

```

### Interface
- An interface type is defined as a set of method signatures.
  - meaning: it holds 0 or more methods, that are executable by each variable tagged to that interface.
```go
type Animal interface {
    Speak() string
}

type Dog struct {
}

func (d Dog) Speak() string {
    return "Woof!"
}

type Cat struct {
}

func (c Cat) Speak() string {
    return "Meow!"
}

func main() {
    animals := []Animal{Dog{}, Cat{}, Llama{}, JavaProgrammer{}}
    for _, animal := range animals {
        fmt.Println(animal.Speak())
    }
}
```

#### Empty interface
- An empty interface may hold values of any type. (Every type implements at least zero methods.)

```go
package main

import "fmt"

func main() {
	var i interface{}
	describe(i)

	i = 42
	describe(i)

	i = "hello"
	describe(i)
}

func describe(i interface{}) {
	fmt.Printf("(%v, %T)\n", i, i)
}
```

## Functions

### Methods
- You can only declare a method with a receiver whose type is defined in the same package as the method.
- You cannot declare a method with a receiver whose type is defined in another package (which includes the built-in types such as int).

```go
type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
	v := Vertex{3, 4}
	fmt.Println(v.Abs())
}
```
- Same functionality:
```go
type Vertex struct {
	X, Y float64
}

func Abs(v Vertex) float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
	v := Vertex{3, 4}
	fmt.Println(Abs(v))
}
```

**Methods on non-struct Types**
```go
type MyFloat float64

func (f MyFloat) Abs() float64 {
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}

func main() {
	f := MyFloat(-math.Sqrt2)
	fmt.Println(f.Abs())
}
```

**Pointer Receivers**
- In general, all methods on a given type should have either value or pointer receivers, but not a mixture of both. (We'll see why over the next few pages.).
- Using a pointer receiver
  - Allows the method to modify the value that its receiver points to
  - Avoids copying the value on each method call. This can be more efficient if the receiver is a large struct, for example.

```go

func (v Vertex) Scale2(f float64) {
  // this cannot modify the true values
	v.X = v.X * f
	v.Y = v.Y * f
}

func (v *Vertex) Scale(f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func main() {
	v := Vertex{3, 4}
	v.Scale(10) // modifies the object
	v.Scale2(10) // cannot modify the object
	fmt.Println(v.Abs())
}
```

## Error Handling
- The error type is a built-in interface.
```go
i, err := strconv.Atoi("42")
if !err {
    fmt.Printf("couldn't convert number: %v\n", err)
    return
}
fmt.Println("Converted integer:", i)
```

```go
err := errors.New("emit macho dwarf: elf header corrupted")
if err != nil {
    fmt.Print(err)
}
```

**Print Line Number**
```go
import "log"
log.SetFlags(log.LstdFlags | log.Lshortfile)
if err != nil {
  log.Fatal(err)
  return
}
```

**Better Error handling**
[https://github.com/palantir/stacktrace](https://github.com/palantir/stacktrace)

## Threads / GoRoutines
- Concurency
```go
package main

import (
	"fmt"
	"time"
)

func say(s string) {
	for i := 0; i < 5; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println(s)
	}
}

func main() {
	go say("world")
	say("hello")
}

```

### Channels
- Channels are a typed conduit through which you can send and receive values with the channel operator, `<-`.
```go
ch <- v    // Send v to channel ch.
v := <-ch  // Receive from ch, and
           // assign value to v.
```

- Example:
```go
package main

import "fmt"

func sum(s []int, c chan int) {
	sum := 0
	for _, v := range s {
		sum += v
	}
	c <- sum // send sum to c
}

func main() {
	s := []int{7, 2, 8, -9, 4, 0}

	c := make(chan int)
	go sum(s[:len(s)/2], c)
	go sum(s[len(s)/2:], c)
	x, y := <-c, <-c // receive from c

	fmt.Println(x, y, x+y)
}
```

#### Buffered Channels
- We can pass a number of values through the channel and buffer/hold
```go
package main

import "fmt"

func main() {
	ch := make(chan int, 10) // buffer length of 10
	ch <- 1
	ch <- 2
	fmt.Println(<-ch)
	fmt.Println(<-ch)
}
```

### Channel Range / Closing
- `v, ok := <-ch` : ok is false if there are no more values to receive and the channel is closed.
- The loop `for i := range c` receives values from the channel repeatedly until it is closed.

```go
package main

import (
	"fmt"
)

func fibonacci(n int, c chan int) {
	x, y := 0, 1
	for i := 0; i < n; i++ {
		c <- x
		x, y = y, x+y
	}
	close(c)
}

func main() {
	c := make(chan int, 10)
	go fibonacci(cap(c), c)
	for i := range c {
		fmt.Println(i)
	}
}
```

### Select
- The `select` statement lets a goroutine wait on multiple communication operations.
- A `select` blocks until one of its cases can run, then it executes that case. It chooses one at random if multiple are ready.

```go
package main

import "fmt"

func fibonacci(c, quit chan int) {
	x, y := 0, 1
	for {
		select {
		case c <- x:
			x, y = y, x+y
		case <-quit:
			fmt.Println("quit")
			return
		}
	}
}

func main() {
	c := make(chan int)
	quit := make(chan int)
	go func() {
		for i := 0; i < 10; i++ {
			fmt.Println(<-c)
		}
		quit <- 0
	}()
	fibonacci(c, quit)
}
```

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	tick := time.Tick(100 * time.Millisecond)
	boom := time.After(500 * time.Millisecond)
	for {
		select {
		case <-tick:
			fmt.Println("tick.")
		case <-boom:
			fmt.Println("BOOM!")
			return
		default:
			fmt.Println("    .")
			time.Sleep(50 * time.Millisecond)
		}
	}
}
```

### Sync Mutex
-  What if we just want to make sure only one goroutine can access a variable at a time to avoid conflicts?
- standard library provides mutual exclusion with sync.Mutex and its two methods:
```
Lock
Unlock
```

Examples:
```go
package main

import (
	"fmt"
	"sync"
	"time"
)

// SafeCounter is safe to use concurrently.
type SafeCounter struct {
	v   map[string]int
	mux sync.Mutex
}

// Inc increments the counter for the given key.
func (c *SafeCounter) Inc(key string) {
	c.mux.Lock()
	// Lock so only one goroutine at a time can access the map c.v.
	c.v[key]++
	c.mux.Unlock()
}

// Value returns the current value of the counter for the given key.
func (c *SafeCounter) Value(key string) int {
	c.mux.Lock()
	// Lock so only one goroutine at a time can access the map c.v.
	defer c.mux.Unlock()
	return c.v[key]
}

func main() {
	c := SafeCounter{v: make(map[string]int)}
	for i := 0; i < 1000; i++ {
		go c.Inc("somekey")
	}

	time.Sleep(time.Second)
	fmt.Println(c.Value("somekey"))
}
```

## Other

### Arguments
```go
if len(os.Args) > 1 {
  dsn = os.Args[1]
  if dsn != "" {
    return dsn
  }
}
```

### Printing

```go
// %d for digits
// %v for values
fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
fmt.Printf("(Value: %v, Type: %T)\n", i, i)
```

### Type assertions
- This statement asserts that the interface value i holds the concrete type T and assigns the underlying T value to the variable t: ` t := i.(T) `

```go
func main() {
	var i interface{} = "hello"

	s := i.(string)
	fmt.Println(s)

	s, ok := i.(string)
	fmt.Println(s, ok)

	f, ok := i.(float64)
	fmt.Println(f, ok)

	f = i.(float64) // panic
	fmt.Println(f)
}

/* output:
hello
hello true
0 false
panic: interface conversion: interface is string, not float64
*/
```

### Type Assertion Switch
```go

func do(i interface{}) {
	switch v := i.(type) {
	case int:
		fmt.Printf("Twice %v is %v\n", v, v*2)
	case string:
		fmt.Printf("%q is %v bytes long\n", v, len(v))
	default:
		fmt.Printf("I don't know about type %T!\n", v)
	}
}

func main() {
	do(21)
	do("hello")
	do(true)
}
```

### Stringers
- This is like Python's `__str__`: returns the a custom string for a variable.
```go
type Person struct {
	Name string
	Age  int
}

func (p Person) String() string {
	return fmt.Sprintf("%v (%v years)", p.Name, p.Age)
}

func main() {
	a := Person{"Arthur Dent", 42}
	z := Person{"Zaphod Beeblebrox", 9001}
	fmt.Println(a, z)
}
```



### GOPATH
See this:
<https://www.reddit.com/r/golang/comments/1kw7ac/can_someone_convince_me_gopath_is_a_good_idea/>

```
export GOBIN=[WorkspacePath]/bin
```


### BeeGo
**Tutorial:** <https://beego.me/docs/install/bee.md>


### Oracle

<https://github.com/mattn/go-oci8>


#### Instructions
<https://github.com/Centny/Centny/blob/master/Articles/How%20build%20github.com:mattn:go-oci8.md>
<http://apextips.blogspot.com/2015/09/making-connections-to-oracle-database.html>

**PKG_CONFIG_PATH**
<http://askubuntu.com/questions/210210/pkg-config-path-environment-variable>

**TNS / DNS Connections**
<http://www.programering.com/a/MTO2EDNwATI.html>

**ERRORS**
<http://stackoverflow.com/questions/335928/ld-cannot-find-an-existing-library>

#### Installation Script [Ubuntu]
```bash
  # Assuming GO, pkg-config, unzip are properly installed
  # Assuming the Oracle instant client zip file is location in $TMP
  # Assuming variables $GOROOT, $GOPATH and $PATH are properly set
  # Folder $PROGS is where programs are stored

export TMP=/tmp  # Temporary folder
export PROGS=/progs  # where programs are stored
export PKG_CONFIG_PATH=/progs/pkgconfig # for package confige

mkdir -p $PKG_CONFIG_PATH

cd $TMP
unzip instantclient-basic-linux*.zip
unzip instantclient-sdk-linux*.zip
mv instantclient_11_2 $PROGS

echo "
prefixdir=$PROGS/instantclient_11_2
libdir=${prefixdir}
includedir=${prefixdir}/sdk/include

Name: OCI
Description: Oracle database driver
Version: 11.2
Libs: -L${libdir} -lclntsh
Cflags: -I${includedir}
" > $PKG_CONFIG_PATH/oci83.pc

go get github.com/mattn/go-oci8


```

#### Testing
```bash
  # Ensure tnsnames.ora is located in folder $TNS_ADMIN
  # Assuming variables $GOROOT, $GOPATH and $PATH are properly set

export TNS_ADMIN=$PROGS/instantclient_11_2
export GO_OCI8_DB1="Username1/password2@DB1_TNS_ENTRY"
export ORCL_TEST=$GOPATH/src/oracle1

mkdir -p $ORCL_TEST
cd $ORCL_TEST

  # Ajust Connection string ENV variable, and SQL select statement
cat '
package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"time"

	_ "github.com/mattn/go-oci8"
)

func main() {
	os.Setenv("NLS_LANG", "AMERICAN_AMERICA.AL32UTF8")
	log.SetFlags(log.LstdFlags | log.Lshortfile)

	db, err := sql.Open("oci8", os.Getenv("GO_OCI8_DB1"))
	if err != nil {
		log.Fatal(err)
		return
	}
	defer db.Close()

	fmt.Println("Running query...")
	rows, err := db.Query("select * from TABLE_DIM where ROWNUM <= 500")
	if err != nil {
		log.Fatal(err)
		return
	}
	defer rows.Close()

	t0 := time.Now()

	i := 0
	for rows.Next() {
		i++
	}

	dt := time.Now().Sub(t0)
	fmt.Printf("%v rows.\n", i)
	fmt.Printf("The call took %v to run.\n", dt)
	fmt.Printf("Rate: %v rows/sec.\n", i/int(dt.Seconds()))
}
' > main.go

  # Run!
go run main.go
```

## Databases

### Scanning

### Retreiving
<http://go-database-sql.org/retrieving.html>
<http://stackoverflow.com/questions/21986780/is-it-possible-to-retrieve-a-column-value-by-name-using-golang-database-sql>
<http://stackoverflow.com/questions/14477941/read-select-columns-into-string-in-go>
