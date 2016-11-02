
## Keywords
Address: `&i` returns the address

Pointer: `*j` returns the value of the pointer


Reference


### GOPATH
See this:
<https://www.reddit.com/r/golang/comments/1kw7ac/can_someone_convince_me_gopath_is_a_good_idea/>

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

