var form = document.querySelector('#form')
var output = document.querySelector('#output')

function recover() {
  try {
    var board = JSON.parse(localStorage.getItem('board'))

    scan((x, y, el) => {
      el.value = board[x][y]
    })
  } catch(error) {}
}

function scan(cb) {
  var c = 0
  var row = 0

  // scans left to right, row by row
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      for (var k = 0; k < 3; k++) {
        for (var l = 0; l < 3; l++) {
          var el = form.querySelector(`[name="${i}${j}${k}${l}"]`)
          if (el) {
            cb(row, c, el)
          }
          if (++c % 9 === 0) {
            row++
            c = 0
          }
        }
      }
    }
  }
}

form.addEventListener('submit', event => {
  event.preventDefault()

  var board = []

  scan((x, y, el) => {
    if (!board[x])  {
      board[x] = []
    }
    board[x][y] = el.value
  })

  try {
    localStorage.setItem('board', JSON.stringify(board))
  } catch(error) {}

  var isValid = isValidSudoku(board)
  output.innerHTML = isValid ? 'VALID' : 'NOT VALID'
})

recover()
