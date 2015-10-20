const test = require('tape');
const isValidSudoku = require('../is-valid-sudoku');

test('flowright', function (t) {
  'use strict';

  t.plan(11);

  var validBoard = [
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]
  ];

  var invalidBoard = [
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,2,7,9]
  ];

  var incompleteBoard = [
    [5,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,8,3,4,2,5,6,7],
    [8,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,7,9]
  ];

  t.equal(isValidSudoku._isValidRange(), false);
  t.equal(isValidSudoku._isValidRange({}), false);
  t.equal(isValidSudoku._isValidRange([1,2,2,4,5,6,7,8,9]), false);
  t.equal(isValidSudoku._isValidRange([1,2,2,4,6,7,8,9]), false);
  t.equal(isValidSudoku._isValidRange([1,2,3,4,5,6,7,8,9]), true);
  t.equal(isValidSudoku(validBoard), true);
  t.equal(isValidSudoku(invalidBoard), false);
  t.equal(isValidSudoku(incompleteBoard), false);
  t.equal(isValidSudoku(), false);
  t.equal(isValidSudoku([]), false);
  t.equal(isValidSudoku(true), false);
});
