const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let c = 0;
  let s3 = Array.from(s1);
  let s4 = Array.from(s2);

  for (let i = 0; i < s3.length; i++) {
    if (s4.includes(s3[i])) {
      let a = s4.indexOf(s3[i]);
      s4.splice(a, 1);
      c += 1;
    }
  }
  return c;
}

module.exports = {
  getCommonCharacterCount,
};
