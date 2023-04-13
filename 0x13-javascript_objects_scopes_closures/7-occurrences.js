#!/usr/bin/node   // This line specifies the location of the interpreter that will run the script
exports.nbOccurences = function (list, searchElement) {   // This line exports a function called nbOccurences that takes an array called 'list' and a search element called 'searchElement'
  return list.reduce((count, current) => current === searchElement ? count + 1 : count, 0);   // This line uses the reduce method to count the number of occurrences of the search element in the list
};
