#!/usr/bin/node  // This line specifies the location of the interpreter that will run the script
let count = 0;  // This line creates a variable called 'count' and initializes it to 0
exports.logMe = function (item) {  // This line exports a function called 'logMe' that takes a parameter called 'item'
  console.log(`${count++}: ${item}`);  // This line logs a message to the console with the current value of 'count' followed by the value of 'item', and then increments 'count'
};
