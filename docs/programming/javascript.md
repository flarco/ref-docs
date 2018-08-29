#JavaScript

## Objects

### Destructuring

```javascript
var a, b, rest;

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 3 proposal
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); //{c: 30, d: 40}
```

### Contains Key

```javascript
if ("key" in myObj) {
  // logic
}
```

### Copy / Clone

```javascript
database = Object.assign({}, databases[name]); // copy of object
```

### Iteration

```javascript
let databases = { k1: "v1", k2: "v2" };
Object.entries(databases).forEach(function(item) {
  // item is ['k1', 'v1], then ['k2', 'v2']
  let [key, val] = item;
}, this);

Object.keys(databases).forEach(function(key) {
  let val = databases[key];
}, this);
```

## Arrays

### Destructuring

```javascript
var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]
```

### Iteration

```javascript
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
```

### Find

```javascript
// To find index
let i = state.items.findIndex(obj => obj.name == "Query");
let item = state.items[i];
```

```javascript
// to find item
const user = this.users.find(user => {
  return user.id == registration.userId;
});

// OR

const user = this.users.find(user => user.id == registration.userId);
```

### Create

```javascript
// creates 100 rows of arrays with length of 6
let data = Array.from({ length: 100 }, () =>
  Array.from({ length: 6 }, () => Math.random() * 1000)
);
```

### Filter

```javascript
let filteredUsers = users.filter(user => {
  return !user.registered;
});
```

### Pop

[Remove last element from Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

```javascript
var a = [1, 2, 3];
a.pop();

console.log(a); // [1, 2]
```

## Splice

[Manipulate array, remove middle value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

```javascript
var myFish = ["angel", "clown", "mandarin", "sturgeon"];

myFish.splice(2, 0, "drum"); // insert 'drum' at 2-index position
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

myFish.splice(2, 1); // remove 1 item at 2-index position (that is, "drum")
// myFish is ["angel", "clown", "mandarin", "sturgeon"]
```

# VueJS
