import { BaseRepoConstants } from './BaseRepoConstants';
import { BaseRepoSelector } from './BaseRepoSelector';

/**
 * handle the repo related actions via the generic reducer
 * @param constants
 * @param selectors
 * @param reducerFn
 * @returns {Function}
 */
export const baseRepoReducer = (constants = new BaseRepoConstants(), selectors = BaseRepoSelector, reducerFn) => {
	return (state = selectors.defaultState, action) => {
		const data = { ...state.data };

		switch (action.type) {
			case constants.SET_STATE:
				return { ...state, state: action.payload };

			case constants.ADD_ONE:
			case constants.UPDATE_ONE:
				return { ...state, data: { ...state.data, [selectors.getKey(action.payload)]: action.payload } };

			case constants.UPDATE_MULTIPLE:
			case constants.ADD_MULTIPLE:
				const newData = {};
				action.payload.forEach(item => {
					newData[selectors.getKey(item)] = item;
				});

				return { ...state, data: { ...state.data, ...newData } };

			case constants.REMOVE_ONE:
				delete data[action.payload];
				return { ...state, data };

			case constants.REMOVE_MULTIPLE:
				action.payload.forEach(item => {
					delete data[item];
				});
				return { ...state, data };

			case constants.CLEAR_ALL:
				return { ...state, data: {} };
			default:
				return reducerFn(state, action);
		}

	};
};