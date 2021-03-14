module.exports = class DepthCalculator {
  calculateDepth(arr) {
    const arraysInArr = arr.filter((el) => Array.isArray(el));
    if (arraysInArr.length === 0) return 1;
    return Math.max(...arraysInArr.map((el) => this.calculateDepth(el))) + 1;
  }
};
