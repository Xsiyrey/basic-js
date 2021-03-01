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
    if (Object.prototype.toString.call(date) !== "[object Date]")
      throw new Error();
    return seasonName[
      season.findIndex((x) => x.some((y) => y === date.getMonth()))
    ];
  } else return "Unable to determine the time of year!";
};
