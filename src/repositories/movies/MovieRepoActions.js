import { MOVIE_REPO_CONSTANTS } from './MovieRepoConstants';
import { BaseRepoActions } from '../base/BaseRepoActions';

class MovieRepoActions extends BaseRepoActions {
	constructor() {
		super();
		this.setup(MOVIE_REPO_CONSTANTS);

	}
}

export const movieRepoActions = new MovieRepoActions();