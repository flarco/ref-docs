
## Keywords
Address: `&i` returns the address

Pointer: `*j` returns the value of the pointer


## Control Flow
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

### Strings

**Split**
```go
strings.Fields(s)
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

## Printing

```go
// %d for digits
// %v for values
fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)

```

### GOPATH
See this:
<https://www.reddit.com/r/golang/comments/1kw7ac/can_someone_convince_me_gopath_is_a_good_idea/>



