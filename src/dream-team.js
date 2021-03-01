const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members
    .reduce(
      (acc, cur) =>
        cur && typeof cur === "string"
          ? acc + cur.trim()[0].toUpperCase()
          : acc,
      ""
    )
    .split("")
    .sort()
    .join("");
  throw new CustomError("Not implemented");
  // remove line with error and write your code here
};
