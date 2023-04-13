#!/usr/bin/node
// Import the object called `dict` from the file `101-data.js`
const dict = require('./101-data.js').dict;
// Create a new empty object called `newDic`
const newDic = {};
// Loop through each key in `dict`
for (const key in dict) {
  // Check if the value associated with the current key in `dict` already exists as a key in `newDic`
  if (newDic[dict[key]]) {
    // If it does, append the current key from `dict` to the array of values associated with that key in `newDic`
    newDic[dict[key]].push(key);
  } else {
    // If it does not, create a new key in `newDic` with the value from `dict` and set its value to an array containing the current key
    newDic[dict[key]] = [key];
  }
}
// Log the resulting `newDic` object to the console
console.log(newDic);
