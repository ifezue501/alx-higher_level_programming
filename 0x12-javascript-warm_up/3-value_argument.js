#!/usr/bin/node
// Import the argv object from the process module
const { argv } = require('process');
// Check if the third element of argv is undefined
if (argv[2] === undefined) {
  // If it's undefined, there are no arguments (argv[0] is the path to the script, and argv[1] is the script name)
  console.log('No argument');
} else {
  // If it's defined, print the value of the third element of argv
  console.log(argv[2]);
}
