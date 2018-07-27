import { flatMap, map } from 'rxjs/operators';
import { ACTIONS, updateMovieList } from '../actions';
import { EpicUtil } from '../util/EpicUtil';
import { HttpService } from '../util/Http.service';


export class MovieListEpic {
	/**
	 * simple epic to demonstrate how epics can be used with redux
	 */
	static onInit = EpicUtil.onAction(ACTIONS.INIT_MOVIE_LIST,
																		flatMap(() => HttpService.getJSON('https://moviedb.tomreinartz.com/lists/movies/popular-underground')),
																		map(updateMovieList));

	//barrel of all epic functions
	static epics = [MovieListEpic.onInit];
}

