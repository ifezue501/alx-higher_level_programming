#!/usr/bin/node
// Import the argv object from the process module
const { argv } = require('process');
// Check the length of the argv array to determine how many arguments were passed
if (argv.length === 2) {
  // If the length is 2, there are no arguments (argv[0] is the path to the script, and argv[1] is the script name)
  console.log('No argument');
} else if (argv.length === 3) {
  // If the length is 3, there is one argument (argv[2])
  console.log('Argument found');
} else {
  // If the length is greater than 3, there are multiple arguments
  console.log('Arguments found');
}
