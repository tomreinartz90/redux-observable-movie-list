import { combineEpics } from 'redux-observable';
import { AppEpic } from './App.epic';
import { MovieListEpic } from './MovieList.epic';

export const rootEpic = combineEpics(
	...AppEpic.epics,
	...MovieListEpic.epics
);
