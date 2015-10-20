(function(root) {
  'use strict';

  function isValidSudoku(rows) {
    if (!(Array.isArray(rows) && rows.length === 9)) {
      return false;
    }

    var columns = [];
    var boxes = [];
    var box = [];

    for (var i = 0, row; row = rows[i]; i++) {
      for (var j = 0, col; col = rows[i][j]; j++) {
        columns[j] = columns[j] || [];
        columns[j][i] = col;
      }
    }

    for (var xOffset = 0; xOffset < 9; xOffset += 3) {
      for (var yOffset = 0; yOffset < 9; yOffset += 3) {
        for (var x = 0; x < 3; x++) {
          for (var y = 0; y < 3; y++) {
            box.push(rows[x + xOffset][y + yOffset]);
          }
        }

        boxes.push(box);
        box = [];
      }
    }

    return (rows.every(isValidSudoku._isValidRange) &&
            columns.every(isValidSudoku._isValidRange) &&
            boxes.every(isValidSudoku._isValidRange));
  }

  isValidSudoku._isValidRange = function(col) {
    if (!Array.isArray(col)) {
      return false;
    }

    var validNumRange = '1,2,3,4,5,6,7,8,9';
    return (col.sort().toString() === validNumRange);
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isValidSudoku;
    }
    exports.isValidSudoku = isValidSudoku;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return isValidSudoku;
    });
  } else {
    root.isValidSudoku = isValidSudoku;
  }

})(this);
