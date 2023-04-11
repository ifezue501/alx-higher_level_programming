#!/usr/bin/node
/**
 * Call the provided function x number of times.
 *
 * @param {number} x - The number of times to call the function.
 * @param {function} theFunction - The function to call.
 */
exports.callMeMoby = function (x, theFunction) {
  for (let i = 0; i < x; i++) {
    theFunction();
  }
};
