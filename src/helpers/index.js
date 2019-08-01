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

const isPlayerWin = (board, streak, player) => {
  const rowMax = board.length
  const colMax = board[0].length
  var result = []
  for(let r = 0; r < rowMax; r++) {
    var temp = []
    for(let c = 0; c < colMax; c++) {
      var el = board[r][c]
      el = el === player ? 1 : 0
      temp.push([el, el, el, el])
    }
    result.push(temp)
  }
  for(let r = 0; r < rowMax; r++) {
    for(let c = 0; c < colMax; c++) {
      if (board[r][c]===player){
        const topLeft = (r>0 && c>0) ? result[r-1][c-1][0] : 0
        const top = r>0 ? result[r-1][c][1] : 0
        const topRight = (r>0 && (c+1)<colMax) ? result[r-1][c+1][2]: 0
        const left = c>0 ? result[r][c-1][3] : 0
        result[r][c][0] = topLeft+1
        result[r][c][1] = top+1
        result[r][c][2] = topRight+1
        result[r][c][3] = left+1
      }
    }
  }
  for(let r = 0; r < rowMax; r++) {
    for(let c = 0; c < colMax; c++) {
      for(let dir = 0; dir < 4; dir++) { 
        if (result[r][c][dir] === streak){
          return true
        }
      }
    }
  }
  return false
};

const isBoardFull = (board) => {
  const rowMax = board.length
  const colMax = board[0].length
  for(var r = 0; r < rowMax; r++) {
    for(var c = 0; c < colMax; c++) {
      if (board[r][c]==null){
        return false
      }
    }
  }
  return true
}

export const isWin = (board, streak) => {
  const isPlayerOneWin = isPlayerWin(board, streak, 1)
  if (isPlayerOneWin){
    return 1
  }
  const isPlayerZeroWin = isPlayerWin(board, streak, 0)
  if (isPlayerZeroWin){
    return 0
  }
  if (isBoardFull(board)){
    return 2
  }
  return null
};


