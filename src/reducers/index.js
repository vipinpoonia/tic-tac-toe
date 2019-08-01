import { combineReducers } from 'redux';
import initializeGame from './initializeGmae';
import gameState from './gameState';


const rootReducer = combineReducers({
    initializeGame,
    gameState
});

export default rootReducer;
