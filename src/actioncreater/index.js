import {
  SET_BOARD_DIMENSIONS,
  // SET_BOARD_DIMENSIONS_ERROR,
  SET_BOARD_DIMENSIONS_SUCCESS,
  SET_STREAK_SIZE,
  // SET_STREAK_SIZE_ERROR,
  SET_STREAK_SIZE_SUCCESS,

  RESET_BOARD,
  // RESET_BOARD_ERROR,
  RESET_BOARD_SUCCESS,
  CHANGE_BOARD_VALUE,
  CHANGE_BOARD_VALUE_ERROR,
  CHANGE_BOARD_VALUE_SUCCESS,
  INVALIDATE_BOARD,

  SET_WINNER
} from '../actions/index';
import { generateMatrix, getUpdateMatrix, isWin } from '../helpers'
// not handling any error for now.


export const invalidateGame = () => (dispatch) => {
  dispatch({
    type: INVALIDATE_BOARD
  });
};

export const resetBoard = (row, col) => (dispatch) => {
  dispatch({type: RESET_BOARD});
  dispatch({
    type: RESET_BOARD_SUCCESS,
    boardState: generateMatrix(row, col)
  });
};

export const updateRowCount = row => (dispatch, getState) => {
  dispatch({type: SET_BOARD_DIMENSIONS});
  const column = getState().initializeGame.column;
  dispatch({
    type: SET_BOARD_DIMENSIONS_SUCCESS,
    row: row,
    column:column
  });
  resetBoard(row, column)(dispatch);
};

export const updateColCount = col => (dispatch, getState) => {
  dispatch({type: SET_BOARD_DIMENSIONS});
  const row = getState().initializeGame.row;
  dispatch({
    type: SET_BOARD_DIMENSIONS_SUCCESS,
    row: row, 
    column:col
  })
  resetBoard(row, col)(dispatch)
};

export const updateStreakCount = streak => (dispatch, getState) => {
  dispatch({type: SET_STREAK_SIZE});
  dispatch({
    type: SET_STREAK_SIZE_SUCCESS,
    streak: streak
  })
};

export const setWinner = winner => (dispatch) => {
  dispatch({
    type: SET_WINNER,
    winner: winner
  });
};

export const restartGame = () => (dispatch, getState) => {
  const row = getState().initializeGame.row;
  const column = getState().initializeGame.column;
  resetBoard(row, column)(dispatch)
};

export const updateBoardCell = (row, col) => (dispatch, getState) => {
  dispatch({type: CHANGE_BOARD_VALUE});
  const currentBoardState = getState().gameState.boardState;
  const streak = getState().initializeGame.streak;
  var result = JSON.parse(JSON.stringify(currentBoardState));

  if (currentBoardState[row][col] == null){
    const newState = getUpdateMatrix(result, row, col)
    const winer = isWin(newState, streak)
    dispatch({
      type: CHANGE_BOARD_VALUE_SUCCESS,
      boardState: newState
    })
    if (winer !== null){
      setWinner(winer)(dispatch)
    }
  }else{
    dispatch({
      type: CHANGE_BOARD_VALUE_ERROR,
      error: "Position is already filled"
    })
  }
}
