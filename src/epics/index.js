import { combineEpics } from 'redux-observable';
import { AppEpic } from './App.epic';
import { epics } from '../repositories';

export const rootEpic = combineEpics(
	...AppEpic.epics,
	...epics
);
