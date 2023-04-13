#!/usr/bin/node   // This line specifies the location of the interpreter that will run the script

module.exports = class Square extends require('./5-square') {   // This line exports a new class called Square that extends the Square class defined in the './5-square' module
  charPrint (c) {   // This code block defines a new function called charPrint that takes an optional argument, c
    if (c === undefined) {   // This code block checks if the optional argument is not provided
      this.print();   // This line calls the print function from the parent class (Square) to print the square using 'X' as the default character
    } else {   // This code block executes if the optional argument is provided
      for (let x = 0; x < this.height; x++) {   // This code block loops through each row of the square
        console.log(c.repeat(this.width));   // This line prints a string of characters c, repeated width number of times for each row of the square
      }
    }
  }
};
