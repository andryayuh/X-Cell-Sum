class TableModel {
  constructor(numCols=10, numRows=20) {
    this.numCols = numCols;
    this.numRows = numRows;
    this.data = {};
  }

  _getCellId(location) {
    return `${location.col}:${location.row}`;
  }

  getValue(location) {
    return this.data[this._getCellId(location)];
  }

  setValue(location, value) {
    this.data[this._getCellId(location)] = value;
  }

  
  _getColNums(col) {
    let nums = [];
    for (var row = 0; row < this.numRows; row++) {
      const position = {col: col, row: row};
      nums.push(parseInt(this.getValue(position), 10));
    }
    return nums;
  }

  getSum(col) {
    let colNums = this._getColNums(col)
    let sum = colNums.filter(x => !isNaN(x));
    if (sum.length > 1) {
      sum = sum.reduce( (a, b) => a + b);
    }
    return sum;
  }

}
module.exports = TableModel;