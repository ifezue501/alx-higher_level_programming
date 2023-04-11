#!/usr/bin/node
// Get the first argument passed on the command line
const numb = process.argv[2];

// Define the recursive function to calculate the factorial
function factorial (numb) {
  // Check if the argument is less than or equal to 1, or not a number
  if (numb <= 1 || isNaN(numb)) {
    // If it is, return 1 as the factorial of 0 or 1 is 1
    return 1;
  } else {
    // If it is not, return the number multiplied by the factorial of (number - 1)
    return numb * factorial(numb - 1);
  }
}

// Call the factorial function and print the result to the console
console.log(factorial(numb)); 
