#!/usr/bin/node
/**
 * This function takes in a number and a callback function. It increments the number by 1 and passes it to the callback.
 * @param {number} number - The number to be incremented.
 * @param {Function} theFunction - The callback function to be executed with the incremented number as its argument.
 */
exports.addMeMaybe = function (number, theFunction) {
  theFunction(++number);
};
