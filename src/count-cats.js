module.exports = function countCats(matrix) {
  return matrix.reduce(
    (acc, cur) => acc + cur.filter((x) => x === "^^").length,
    0
  );
};
