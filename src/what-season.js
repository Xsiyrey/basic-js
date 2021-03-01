const CustomError = require("../extensions/custom-error");
const season = [
  [11, 0, 1],
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 10],
];
const seasonName = ["winter", "spring", "summer", "autumn"];

module.exports = function getSeason(date) {
  if (date) {
    if (date.constructor.name !== "Date") throw new Error();
    let month = date.getMonth();
    if (month)
      return seasonName[season.findIndex((x) => x.some((y) => y === month))];
    else throw new Error();
  } else return "Unable to determine the time of year!";
  throw new CustomError("Not implemented");
  // remove line with error and write your code here
};
