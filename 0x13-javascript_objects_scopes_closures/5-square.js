#!/usr/bin/node      // This line specifies the location of the interpreter that will run the script
const Rectangle = require('./4-rectangle');  // This line imports the Rectangle class from the './4-rectangle' module and assigns it to a constant named 'Rectangle'

class Square extends Rectangle {  // This line defines a new class called 'Square' that extends the Rectangle class
  constructor (size) {    // This code block defines the constructor function for the Square class and takes one argument, 'size'
    super(size, size);    // This line calls the constructor of the parent class (Rectangle) and passes 'size' as both arguments
  }
}

module.exports = Square;   // This line exports the Square class to be used in other modules
