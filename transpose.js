const transpose = function (matrix) {
  // create new matrix, results, with empty arrays = length of matrix[0]
  let result = [];
  
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // fill these with num from matrix:
  for (let col = 0; col < numCols; col++) {
    const newRow = [];

    for (let row = 0; row < numRows; row++) {
        newRow.push(matrix[row][col]);
    }
    result.push(newRow);
  }

  return result;
};

module.exports = transpose;