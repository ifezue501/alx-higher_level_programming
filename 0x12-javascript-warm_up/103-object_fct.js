#!/usr/bin/node
// Define an object with two properties
const myObject = {
  type: 'object',
  value: 12
};
// Print the initial state of the object
console.log(myObject);
// Add a method named "incr" to the object
myObject.incr = function () {
  this.value++; // Increment the "value" property of the object by 1
};
// Call the "incr" method three times to increment the "value" property
myObject.incr(); // Value is now 13
console.log(myObject);
myObject.incr(); // Value is now 14
console.log(myObject);
myObject.incr(); // Value is now 15
console.log(myObject);
