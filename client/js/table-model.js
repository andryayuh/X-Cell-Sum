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

  getSum(column) {
    let sum = [];
    for (var prop in this.data) {
      if (parseInt(prop[0], 10) === column) {
        if (!isNaN(parseInt(this.data[prop], 10))) {
          sum.push(parseInt(this.data[prop], 10));
        }
      }
    }
    if(sum.length > 1) {
      sum = sum.reduce( function(b,a){
        return b + a;
      });
    }
    return sum;
  }
}

module.exports = TableModel;