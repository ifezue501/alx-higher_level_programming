#!/usr/bin/node              // This line specifies the location of the interpreter that will run the script
module.exports = class Rectangle {    // This line exports a class called Rectangle to be used in other modules
    // The following code block defines the constructor function for the Rectangle class
    constructor(w, h) {
        this.width = w;    // This line sets the 'width' property of the Rectangle instance to the value of 'w'
        this.height = h;   // This line sets the 'height' property of the Rectangle instance to the value of 'h'
    }
};
