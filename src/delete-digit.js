const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let c = String(n).split("");
  let res = 0;
  for (let i = 0; i < c.length; i++) {
    let b = c.slice(0);

    b[i] = "";
    b = b.join("");
    if (b > res) {
      res = b;
    }
  }
  return Number(res);
}

module.exports = {
  deleteDigit,
};
