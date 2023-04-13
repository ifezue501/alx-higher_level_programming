#!/usr/bin/node  // This line specifies the location of the interpreter that will run the script

exports.esrever = function (list) {  // This line exports a function called 'esrever' that takes an array called 'list'
  const newArr = [];  // This line creates an empty array called 'newArr'
  for (let x = list.length - 1; x >= 0; x--) {  // This line creates a loop that starts at the last index of the list and goes backwards to the first index
    newArr.push(list[x]);  // This line adds the element at the current index to the 'newArr'
  }
  return (newArr);  // This line returns the 'newArr'
};
