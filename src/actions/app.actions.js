import { ACTIONS } from './index';

export function initApp() {
	return {
		type: ACTIONS.INIT_APP
	};
}

export function initAppComplete() {
	return {
		type: ACTIONS.INIT_APP_DONE
	};
}