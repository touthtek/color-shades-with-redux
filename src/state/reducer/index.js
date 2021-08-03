import {combineReducers} from 'redux'
import colorReducer from './colorReducer'


const reducers = combineReducers({
    colorCount : colorReducer
});


export default reducers;
