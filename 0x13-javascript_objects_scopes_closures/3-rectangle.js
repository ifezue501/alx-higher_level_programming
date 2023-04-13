#!/usr/bin/node      // This line specifies the location of the interpreter that will run the script
module.exports = class Rectangle {   // This line exports a class called Rectangle to be used in other modules
  constructor (w, h) {    // This code block defines the constructor function for the Rectangle class and takes two arguments, w and h
    if (w > 0 && h > 0) {    // This line checks if both w and h are greater than 0
      this.width = w;    // This line sets the 'width' property of the Rectangle instance to the value of 'w'
      this.height = h;   // This line sets the 'height' property of the Rectangle instance to the value of 'h'
    }
  }
  print () {    // This code block defines a method called 'print' on the Rectangle class
    for (let i = 0; i < this.height; i++) {    // This line initializes a for loop that runs from 0 to the height of the Rectangle instance
      console.log(('X'.repeat(this.width)));  // This line prints a string of 'X' characters with a length equal to the width of the Rectangle instance to the console
    }
  }
};
