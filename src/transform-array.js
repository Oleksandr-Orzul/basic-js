const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  // throw new NotImplementedError('Not implemented');
  let arrN = arr.slice(0);
  let res = [];
  for (let i = 0; i < arrN.length; i++) {
    if (arrN[i] === "--discard-next") {
      if (i !== arrN.length - 1) {
        i++;
      }
    } else if (arrN[i] === "--discard-prev") {
      if (i !== 0 && arrN[i - 2] !== "--discard-next") {
        res.pop();
      }
    } else if (arrN[i] === "--double-next") {
      if (i !== arrN.length - 1) {
        res.push(arrN[i + 1]);
      }
    } else if (arrN[i] === "--double-prev") {
      if (i !== 0 && arrN[i - 2] !== "--discard-next") {
        res.push(arrN[i - 1]);
      }
    } else {
      res.push(arrN[i]);
    }
  }
  return res;
}

module.exports = {
  transform,
};
