import { movieRepo } from './movies';

export { movieRepo } from './movies';

/**
 * used by redux to handle changes
 * @type {{movies: *}}
 */
export const reducers = {
	movies: movieRepo.reducer
};

/**
 * used by redux observable to handle side effects
 * @type {{}}
 */
export const epics = [
	...movieRepo.epics
];