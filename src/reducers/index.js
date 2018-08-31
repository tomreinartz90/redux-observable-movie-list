import { combineReducers } from 'redux';
import { reducers } from '../repositories';

const global = (state = {}, action) => {
	return { ...state };
};

export const rootReducer = combineReducers({
	global,
	...reducers
});