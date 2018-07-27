import { delay, map } from 'rxjs/operators';
import { ACTIONS, initAppComplete } from '../actions';
import { ofType } from 'redux-observable';

export const initApp = (action$) => {
	return action$.pipe(
		ofType(ACTIONS.INIT_APP),
		delay(2000),
		map(q => {
			/*
			 * This example uses the same api of the redux-saga example, thus
				* it adapts a Promise to an Observable.
			 */
			return initAppComplete();
		})
	);
};