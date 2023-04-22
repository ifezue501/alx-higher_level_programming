#!/usr/bin/node

// Import the 'list' array from the module in '100-data.js'
const list = require('./100-data.js').list;

// Create a new array by calling 'map()' on 'list' and multiplying each element by its index,
// then log the new array to the console
const newList = list.map((x, i) => x * i);

console.log('Original list:', list);
console.log('New list:', newList); 
