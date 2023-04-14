const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrN = arr.slice(0);
  let a = [];
  arrN.forEach((b) => {
    if (b !== -1) {
      a.push(b);
    }
  });
  a.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      if (i === 0) {
        a.unshift(-1);
      } else {
        a = a.slice(0, i).concat(-1).concat(a.slice(i));
      }
    }
  }
  return a;
}

module.exports = {
  sortByHeight,
};
