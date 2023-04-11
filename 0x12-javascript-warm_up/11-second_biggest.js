#!/usr/bin/node
// Check if the number of arguments passed is less than or equal to 3
if (process.argv.length <= 3) {
  console.log(0); // If true, print 0
} else {
  // Otherwise, map the arguments to numbers, slice off the first two arguments (which are not numbers),
  // and sort the resulting array in ascending order
  const args = process.argv.map(Number).slice(2, process.argv.length).sort((a, b) => a - b);
  console.log(args[args.length - 2]); // Print the second last element of the array
}
