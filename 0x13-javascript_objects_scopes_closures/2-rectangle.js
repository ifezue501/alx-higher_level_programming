#!/usr/bin/node      // This line specifies the location of the interpreter that will run the script
mdule.exports = class Rectangle {   // This line exports a class called Rectangle to be used in other modules
  constructor (w, h) {    // This code block defines the constructor function for the Rectangle class and takes two arguments, w and h
    if (w > 0 && h > 0) {    // This line checks if both w and h are greater than 0
      this.width = w;    // This line sets the 'width' property of the Rectangle instance to the value of 'w'
      this.height = h;   // This line sets the 'height' property of the Rectangle instance to the value of 'h'
    }
  }
};
