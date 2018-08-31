import { MOVIE_REPO_CONSTANTS } from './MovieRepoConstants';
import { baseRepoReducer } from '../base/baseRepoReducer';

export const movieRepoReducer = baseRepoReducer(MOVIE_REPO_CONSTANTS, undefined, (state, action) => {
	switch (action.type) {
		case MOVIE_REPO_CONSTANTS.UPDATE_ONE:
			return { ...state, data: { ...state.data, ...action.payload } };
		default:
			return state;
	}
});
