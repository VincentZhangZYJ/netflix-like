import { combineReducers } from 'redux';
import film from './film';

const rootReducer = combineReducers({
    filmData: film,
})

export default rootReducer;