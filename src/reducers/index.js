import { combineReducers } from 'redux';
import { ACTIONS } from '../actions';

const global = (state = {}, action) => {
	return state;
};

const movieList = (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.UPDATE_MOVIE_LIST:
			return { ...state, all: action.payload };
		default:
			return state;
	}
};


export const rootReducer = combineReducers({
																						 global,
																						 movieList
																					 });