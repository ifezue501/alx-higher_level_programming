#!/usr/bin/node  // This line specifies the location of the interpreter that will run the script
const list = require('./100-data').list;  // This line imports the 'list' array from the '100-data' module and assigns it to a constant variable called 'list'
console.log(list);  // This line logs the 'list' array to the console
const listed = list.map((num, elem) => num * elem);  // This line creates a new array called 'listed' by calling the 'map' method on the 'list' array with an arrow function that multiplies each element in the 'list' array with its index position
console.log(listed);  // This line logs the 'listed' array to the console
