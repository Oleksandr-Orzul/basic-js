const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(array) {
  let arr = [];
  let res = {};
  for (let i = 0; i < array.length; i++) {
    let a = array[i].split(".");
    arr.push(a);
  }
  let all = [];
  for (let i = 0; i < arr.length; i++) {
    let a = [];
    for (let j = arr[i].length - 1; j >= 0; j--) {
      a.push(arr[i][j]);
      all.push(a.slice(0));
    }
  }
  for (let i = 0; i < all.length; i++) {
    all[i] = all[i].join(".");
  }
  let b = Array.from(new Set(all));
  for (let i = 0; i < b.length; i++) {
    res[b[i]] = 0;
  }
  for (key in res) {
    while (all.indexOf(key) != -1) {
      let a = all.indexOf(key);
      all[a] = "";
      res[key] = res[key] + 1;
    }
  }
  let res1 = {};
  for (key in res) {
    res1[`.${key}`] = res[key];
  }
  return res1;
}

module.exports = {
  getDNSStats,
};
