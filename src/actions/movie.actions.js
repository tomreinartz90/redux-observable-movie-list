import { ACTIONS } from './index';

export function initMovieList() {
	return {
		type: ACTIONS.INIT_MOVIE_LIST
	};
}

export function updateMovieList(payload) {
	return {
		type: ACTIONS.UPDATE_MOVIE_LIST,
		payload
	};
}