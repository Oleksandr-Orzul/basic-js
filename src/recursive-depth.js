const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      let d = 1;
      let maxD = 0;
      for (let i = 0; i < arr.length; i++) {
        maxD = Math.max(maxD, this.calculateDepth(arr[i]));
      }
      return d + maxD;
    } else {
      return 0;
    }
  }
}

module.exports = {
  DepthCalculator,
};
