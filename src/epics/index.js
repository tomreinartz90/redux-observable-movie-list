import { combineEpics } from 'redux-observable';
import { initApp } from './initApp';

export const rootEpic = combineEpics(
	initApp
);
