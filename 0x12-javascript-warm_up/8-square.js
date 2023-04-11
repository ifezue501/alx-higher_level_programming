#!/usr/bin/node
// Import the argv property of the process module
const { argv } = require('process');
// Retrieve the first command line argument and convert it to a number
const size = Number(argv[2]);
// Create a string of Xs with length equal to size
const repeat = 'X'.repeat(size);
// Check if size is NaN, i.e. if the first argument is not a number
if (isNaN(size)) {
  console.log('Missing size');
} else {
  // Print size copies of the repeat string
  for (let i = 0; i < size; i++) {
    console.log(repeat);
  }
}
