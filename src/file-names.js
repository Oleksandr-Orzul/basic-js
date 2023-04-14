const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let a = [];
  for (let i = 0; i < names.length; i++) {
    searsh(names[i], i);
  }
  function searsh(q, b) {
    if (a.indexOf(q) != -1) {
      if (names.indexOf(q) === b && Number(q.slice(-2, -1))) {
        q = q + "(1)";
      } else if (Number(q.slice(-2, -1))) {
        q = q.slice(0, -2) + (Number(q.slice(-2, -1)) + 1) + ")";
      } else {
        q = q + "(1)";
      }
      searsh(q);
    } else {
      a.push(q);
    }
  }
  return a;
}

module.exports = {
  renameFiles,
};
