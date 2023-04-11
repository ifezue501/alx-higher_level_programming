#!/usr/bin/node
// Import the process object from the Node.js runtime
const { argv } = require('process');
// Extract the first and second command-line arguments and convert them to numbers
const a = Number(argv[2]);
const b = Number(argv[3]);
// Define a function to add two numbers
const add = (a, b) => a + b;
// Check if both arguments are numbers before adding them
if (isNaN(a) || isNaN(b)) {
  console.log('Please provide two numbers as command-line arguments');
} else {
  console.log(add(a, b));
}
