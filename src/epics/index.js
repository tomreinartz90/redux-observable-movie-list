import { combineEpics } from 'redux-observable';
import { AppEpic } from './App.epic';
import { epics } from '../repositories';

console.log(epics);
export const rootEpic = combineEpics(
	...AppEpic.epics,
	...epics
);
