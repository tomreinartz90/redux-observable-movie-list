import { flatMap, map } from 'rxjs/operators';
import { EpicUtil } from '../../util/EpicUtil';
import { HttpService } from '../../util/Http.service';
import { movieRepoActions } from './MovieRepoActions';
import { ACTIONS } from '../../actions/constants';

// const on = MOVIE_REPO_CONSTANTS;
const actions = movieRepoActions;

/**
 * handle side effects within the application
 */
class MovieRepoEpic {
	/**
	 * simple epic to demonstrate how epics can be used with redux
	 */
	initMovieList = EpicUtil.onAction(ACTIONS.INIT_APP,
		flatMap(() => HttpService.getJSON('https://moviedb.tomreinartz.com/lists/movies/popular-underground')),
		map(actions.addMultiple));

	//barrel of all epic functions
	epics = [this.initMovieList];
}

export const movieRepoEpics = new MovieRepoEpic().epics;

