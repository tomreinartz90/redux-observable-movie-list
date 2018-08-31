import { flatMap, map } from 'rxjs/operators';
import { EpicUtil } from '../../util/EpicUtil';
import { HttpService } from '../../util/Http.service';
import { movieRepoActions } from './MovieRepoActions';
import { MOVIE_REPO_CONSTANTS } from './MovieRepoConstants';

/**
 * handle side effects within the application
 */
class MovieRepoEpic {
	/**
	 * simple epic to demonstrate how epics can be used with redux
	 */
	initMovieList = EpicUtil.onAction(MOVIE_REPO_CONSTANTS.INIT_REPO,
		flatMap(() => HttpService.getJSON('https://moviedb.tomreinartz.com/lists/movies/popular-underground')),
		map(movieRepoActions.addMultiple));

	//barrel of all epic functions
	epics = [this.initMovieList];
}

export const movieRepoEpics = new MovieRepoEpic().epics;

