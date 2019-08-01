import { 
  RESET_BOARD,
  RESET_BOARD_ERROR,
  RESET_BOARD_SUCCESS,
  CHANGE_BOARD_VALUE,
  CHANGE_BOARD_VALUE_ERROR,
  CHANGE_BOARD_VALUE_SUCCESS,
  INVALIDATE_BOARD,
  SET_WINNER
} from '../actions/index';

const gameState = (
  state = {
    reseting: false,
    updateing: false,
    boardState: [[]],
    winner: null
  },
  action
) => {
  switch (action.type) {
    case RESET_BOARD:
      return {
        ...state,
        reseting: true
      };
    case RESET_BOARD_SUCCESS:
      return {
        ...state,
        initializing: false,
        boardState: action.boardState,
        winner:null
      };
    case RESET_BOARD_ERROR:
      return {
        ...state,
        error: action.error,
        initializing: false
      };
    case CHANGE_BOARD_VALUE:
      return {
        ...state,
        updateing: true
      };
    case CHANGE_BOARD_VALUE_ERROR:
      return {
        ...state,
        error: action.error,
        updateing: false
      };
    case CHANGE_BOARD_VALUE_SUCCESS:
      return {
        ...state,
        updateing: false,
        boardState: action.boardState
      };
    case SET_WINNER:
      console.log("++++++++", action.winner)
      return{
        ...state,
        reseting: false,
        updateing: false,
        state: [[]],
        winner:action.winner
      }
    case INVALIDATE_BOARD:
      return {
        ...state,
        reseting: false,
        updateing: false,
        state: [[]],
        winner:null
      };
    default:
      return state;
  }
};

export default gameState;
