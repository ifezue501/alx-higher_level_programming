#!/usr/bin/node
// Get the command line argument and convert it to a number
const { argv } = require('process');
const occurence = Number(argv[2]);
// Define a function to display the string 'C is fun' multiple times
const display = () => {
  for (let i = 0; i < occurence; i++) {
    console.log('C is fun');
  }
};
// Check if the command line argument is not a number, if it is, call the display function
isNaN(occurence)
  ? (console.log('Missing number of occurrences'))
  : (display());
