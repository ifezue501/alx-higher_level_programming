#!/usr/bin/node
// Define the add function that takes in two parameters and returns their sum
function add(a, b) {
  return a + b;
}
// Call the add function with the command line arguments as input, and print the result to the console
console.log(add(Number(process.argv[2]), Number(process.argv[3]))); 
