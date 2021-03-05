module.exports = function repeater(str, options) {
  let curStr =
    str +
    new Array(options?.additionRepeatTimes ?? 1)
      .fill()
      .map(() => {
        let addition = String(options?.addition);
        if (addition === "undefined") addition = "";
        return addition;
      })
      .join(options?.additionSeparator ?? "|");
  return new Array(options?.repeatTimes ?? 1)
    .fill()
    .map(() => curStr)
    .join(options?.separator ?? "+");
};
