#!/usr/bin/node
// Import the file system module
const fs = require('fs');
// Read the first file passed as an argument and store the contents in variable 'a'
const a = fs.readFileSync(process.argv[2], 'utf8');
// Read the second file passed as an argument and store the contents in variable 'b'
const b = fs.readFileSync(process.argv[3], 'utf8');
// Concatenate the contents of 'a' and 'b', and write the resulting string to a new file with the name passed as the third argument
fs.writeFileSync(process.argv[4], a + b);
