#!/usr/bin/node
// Define the factorial function
function factorial(n) {
  // If n is 0 or NaN, return 1
  if (n === 0 || isNaN(n)) {
    return 1;
  } else {
    // Otherwise, recursively compute the factorial of n-1 and multiply by n
    return n * factorial(n - 1);
  }
}
// Call the factorial function with the command line argument
const arg = Number(process.argv[2]); // Convert the command line argument to a number
const result = factorial(arg); // Compute the factorial of the argument
console.log(result); // Print the result
