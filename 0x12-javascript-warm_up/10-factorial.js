#!/usr/bin/node
// Define the factorial function
function factorial(number) {
  // Base case: if the input is 0, return 1
  if (number === 0) {
    return (1);
  } else {
    // Recursive case: call the factorial function with number - 1 and multiply by the current number
    return (factorial(number - 1) * number);
  }
}
// Get the input number from the command line arguments
const number = parseInt(process.argv[2]);
// Check if the input number is valid and call the factorial function with it
if (number) {
  const result = factorial(number);
  console.log(result);
} else {
  // If the input number is invalid, default to 1
  console.log(1);
}  
