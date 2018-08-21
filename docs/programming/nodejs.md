# NodeJS

---

# Installation
```
# https://chocolatey.org/
choco install nodejs npm
```
# Modules
**Install**
```
# use '-g' to install globally, instead of locally
npm install npm -g

npm install <Module Name>
npm install express
# or
npm install express -g

# in code, to use Module
var express = require('express');

# to check list of installed packages
npm ls
npm ls -g

# uninstall
npm uninstall npm

# update
npm update express

# search
npm search npm
```

## Creating a module
<https://www.tutorialspoint.com/nodejs/nodejs_npm.htm>

# Callback
What is callback? They are called at the end of the function.
In Node Application, any async function accepts a callback as a **last parameter** and the callback function accepts error as a **first parameter**.
```nodejs
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err){
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("Program Ended");
```
<https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm>

# Events
Events are triggered based on something happing.
<https://www.tutorialspoint.com/nodejs/nodejs_event_loop.htm>
```nodejs
// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});

// Fire the connection event
eventEmitter.emit('connection');

console.log("Program Ended.");
```

Output:
```
connection succesful.
data received succesfully.
Program Ended.
```


# Commons
```nodejs
/* Hello World! program in Node.js */
console.log("Hello World!");

// You can use underscore _ to get the last result
> x + y
30
> var sum = _
undefined
> console.log(sum)
30

```

# Loops

**WHILE**
```nodejs
do {
  x++;
  console.log("x: " + x);
} while ( x < 5 );
```
**FOR**