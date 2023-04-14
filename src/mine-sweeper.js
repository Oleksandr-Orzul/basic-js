const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    let a = [];
    for (let j = 0; j < matrix[i].length; j++) {
      a.push(" ");
    }
    res.push(a);
  }
  let c = matrix.length;
  let d = matrix[0].length;
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = [""].concat(matrix[i]).concat("");
  }
  let a = [];
  for (let j = 0; j < matrix[0].length; j++) {
    a.push("");
  }
  matrix.unshift(a);
  matrix.push(a);
  console.log(matrix);
  console.log(c, d);
  for (let i = 1; i <= c; i++) {
    for (let j = 1; j <= d; j++) {
      console.log(matrix[i][j]);
      res[i - 1][j - 1] =
        (matrix[i - 1][j - 1] === true) +
        (matrix[i - 1][j] === true) +
        (matrix[i - 1][j + 1] === true) +
        (matrix[i][j - 1] === true) +
        (matrix[i][j + 1] === true) +
        (matrix[i + 1][j - 1] === true) +
        (matrix[i + 1][j] === true) +
        (matrix[i + 1][j + 1] === true);
    }
  }
  return res;
}

module.exports = {
  minesweeper,
};
