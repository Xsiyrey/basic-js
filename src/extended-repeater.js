module.exports = function repeater(str, options) {
  let curStr =
    str +
    new Array(
      options && options.additionRepeatTimes ? options.additionRepeatTimes : 1
    )
      .fill()
      .map(() => {
        let addition = String(options.addition);
        if (addition === "undefined") addition = "";
        return addition;
      })
      .join(
        options && options.additionSeparator ? options.additionSeparator : "|"
      );
  return new Array(options && options.repeatTimes ? options.repeatTimes : 1)
    .fill()
    .map(() => curStr)
    .join(options && options.separator ? options.separator : "+");
};
