#!/usr/bin/node
// Import the argv object from the process module
const { argv } = require('process');
// Convert the third argument to a number
const converted = Number(argv[2]);
// Check if the converted value is NaN (Not a Number)
if (isNaN(converted)) {
  // If it is, print an error message
  console.log('Not a number');
} else {
  // If it's a valid number, print it using string interpolation
  console.log(`My number: ${converted}`);
}
