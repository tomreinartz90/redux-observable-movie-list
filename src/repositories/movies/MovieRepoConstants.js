import { BaseRepoConstants } from '../base/BaseRepoConstants';

class MovieRepoConstants extends BaseRepoConstants {
	constructor() {
		super();
		this.fillConstants();
	}
}

export const MOVIE_REPO_CONSTANTS = new MovieRepoConstants();