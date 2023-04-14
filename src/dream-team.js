const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  if (members.length < 1) {
    return false;
  }
  let all = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      all.push(members[i].trim());
    }
  }
  let res = [];
  all.forEach((a) => res.push(a[0].toUpperCase()));
  res.sort();
  return res.join("");
  // throw new NotImplementedError('Not implemented');
}

module.exports = {
  createDreamTeam,
};
