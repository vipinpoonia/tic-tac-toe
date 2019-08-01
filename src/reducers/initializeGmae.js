import { 
  SET_BOARD_DIMENSIONS,
  SET_BOARD_DIMENSIONS_ERROR,
  SET_BOARD_DIMENSIONS_SUCCESS,
  SET_STREAK_SIZE,
  SET_STREAK_SIZE_ERROR,
  SET_STREAK_SIZE_SUCCESS,
  INVALIDATE_BOARD,
} from '../actions/index';
  
const initializeGame = (
  state = {
    initializing: false,
    row: 0,
    column: 0,
    streak: 0,
    error: ''
  },
  action
) => {
  switch (action.type) {
    case SET_BOARD_DIMENSIONS:
      return {
        ...state,
        initializing: true
      };

    case SET_BOARD_DIMENSIONS_SUCCESS:
      return {
        ...state,
        row: action.row,
        column: action.column,
        initializing: false
      };

    case SET_BOARD_DIMENSIONS_ERROR:
      return {
        ...state,
        error: action.error,
        initializing: false
      };

    case SET_STREAK_SIZE:
      return {
        ...state,
        initializing: true
      };
  
    case SET_STREAK_SIZE_ERROR:
      return {
        ...state,
        error: action.error,
        initializing: false
      };
    case SET_STREAK_SIZE_SUCCESS:
      return {
        ...state,
        streak: action.streak,
        initializing: false
      };
    case INVALIDATE_BOARD:
      return {
        ...state,
        initializing: false,
        row: 0,
        column: 0,
        streak: 0,
        error: ''
      };

    default:
      return state;
  }
};

export default initializeGame;
  