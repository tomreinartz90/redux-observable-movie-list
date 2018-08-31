import { movieRepoActions } from './MovieRepoActions';
import { movieRepoReducer } from './MovieRepoReducer';
import { movieRepoEpics } from './MovieRepoEpic';
import { MOVIE_REPO_CONSTANTS } from './MovieRepoConstants';
import { BaseRepoSelector } from '../base/BaseRepoSelector';

export const movieRepo = {
	actions: movieRepoActions,
	reducer: movieRepoReducer,
	epics: movieRepoEpics,
	constants: MOVIE_REPO_CONSTANTS,
	selector: new BaseRepoSelector('movies')
};