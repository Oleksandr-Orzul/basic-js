const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let a = String(n);
  while (a.length > 1) {
    a = a.split("");
    let c = 0;
    for (let i = 0; i < a.length; i++) {
      c += Number(a[i]);
    }
    a = String(c);
  }
  return +a;
}

module.exports = {
  getSumOfDigits,
};
