#!/usr/bin/node
// Import the argv object from the process module
const { argv } = require('process');
// Get the third and fourth elements of argv (argv[0] is the path to the script, and argv[1] is the script name)
const argv1 = argv[2];
const argv2 = argv[3];
// Print the concatenation of the two arguments with a string in between
console.log(argv1 + ' is ' + argv2);
