#!/usr/bin/node
// Import the 'list' array from the module in '100-data.js'
const list = require('./100-data.js').list;
// Log the original 'list' array to the console
console.log(list);
// Create a new array by calling 'map()' on 'list' and multiplying each element by its index,
// then log the new array to the console
console.log(list.map((x, xI) => x * xI)); 
