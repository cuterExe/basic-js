module.exports = function countCats(matrix) {
  const catsMask = '^^';
  return matrix.reduce(
    (acc, row) => acc + row.filter((element) => element === catsMask).length,
    0
  );
};
