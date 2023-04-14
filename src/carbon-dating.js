const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(q) {
  if (typeof q !== "string" || !q) {
    return false;
  }
  let a = Number(q);
  if (isNaN(a) || a > 15 || a <= 0) {
    return false;
  }
  let b = Math.log(MODERN_ACTIVITY / a);

  let c = 0.693 / HALF_LIFE_PERIOD;
  let res = Math.ceil(b / c);
  if (typeof res !== "number" || res === NaN) {
    return false;
  }
  return res;
}

module.exports = {
  dateSample,
};
