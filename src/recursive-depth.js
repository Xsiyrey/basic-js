module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 0;
    arr.forEach((x) => {
      if (Array.isArray(x)) {
        let depth = this.calculateDepth(x);
        if (depth > maxDepth) maxDepth = depth;
      }
    });
    return maxDepth + 1;
  }
};
