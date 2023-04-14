const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatT = options.repeatTimes || 1;
  let sep = options.separator || "+";
  let addition = options.addition !== undefined ? String(options.addition) : "";
  let additionRepTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || "|";
  let repeatedAddition = addition;
  if (additionRepTimes > 1) {
    repeatedAddition =
      (addition + additionSeparator).repeat(additionRepTimes - 1) + addition;
  }

  let res = str + repeatedAddition;
  if (repeatT > 1) {
    res =
      (str + repeatedAddition + sep).repeat(repeatT - 1) +
      str +
      repeatedAddition;
  }

  return res;
}

module.exports = {
  repeater,
};
