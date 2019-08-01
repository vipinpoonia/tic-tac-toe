export const generateMatrix = (row, col) => {
  var result = []
  for(var i = 0; i < row; i++) {
    result.push(new Array(col).fill(null))
  }
  return result
};

export const getUpdateMatrix = (currentBoardState, row, col) =>{
  const rowMax = currentBoardState.length
  const colMax  = currentBoardState[0].length
  var count_0 = 0
  var count_1 = 0
  for(var i = 0; i < rowMax; i++) {
    for(var j = 0; j < colMax; j++) {
      if (currentBoardState[i][j] === 0){
        count_0++
      }
      if (currentBoardState[i][j] === 1){
        count_1++
      }
    }
  }
  var value = count_0 > count_1 ? 1 : 0
  currentBoardState[row][col] = value
  return currentBoardState
}

const isWinInRow = (board, streak) => {
  const rowMax = board.length
  const colMax  = board[0].length
  if (board[0][0]===1 && board[0][1]===1 && board[0][2]=== 1 ||
      board[1][0]===1 &&  board[1][1]===1 &&  board[1][2]=== 1 ||
      board[2][0]===1 &&  board[2][1]===1 &&  board[2][2]=== 1
  ){
    return 1
  }
  if (board[0][0]===0 && board[0][1]===0 && board[0][2]=== 0 ||
    board[1][0]===0 &&  board[1][1]===0 &&  board[1][2]=== 0 ||
    board[2][0]===0 &&  board[2][1]===0 &&  board[2][2]=== 0
  ){
    return 0
  }
  return null
}

const isWinInColumn = (board, streak) => {
  const rowMax = board.length
  const colMax  = board[0].length
  return false
}

const isWinInDiagonal = (board, streak) => {
  const rowMax = board.length
  const colMax  = board[0].length
  return false
}

const isWinInAntiDiagonal = (board, streak) => {
  const rowMax = board.length
  const colMax  = board[0].length
  return false
}

export const isWin = (board, streak) => {
  var row = isWinInRow(board, streak)
  if (row !== null){
    return row
  }
  return null
};


