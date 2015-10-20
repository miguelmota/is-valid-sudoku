# is-valid-sudoku

> Returns true if valid [Sudoku](https://en.wikipedia.org/wiki/Sudoku) puzzle values.

<a href="https://en.wikipedia.org/wiki/Sudoku"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/364px-Sudoku-by-L2G-20050714_solution.svg.png" width="200" /></a>

# Install

```bash
npm install is-valid-sudoku
```

```bash
bower install is-valid-sudoku
```

# Usage

Accepts an array of rows.

```javascript
var isValidSudoku = require('is-valid-sudoku');

var board = [
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

console.log(isValidSudoku(board)); // true
```

# Test

```bash
npm test
```

# License

MIT
