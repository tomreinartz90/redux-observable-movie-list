/**
 * helper class used to manage data related to a repo
 */
export class BaseRepoSelector {
	static defaultState = {
		data: {},
		loadingState: 'IDLE'
	};
	baseKey = '';

	constructor(baseKey) {
		this.baseKey = baseKey;
	}

	/**
	 * return all items in the repo
	 */
	getAll(state) {
		const data = state[this.baseKey].data;
		return Object.keys(data).map(key => (data[key]));
	}

	/**
	 * return a single item in the repo
	 */
	getOne(key) {
		return (state) => {
			return state[this.baseKey].data[key];
		};
	}

	/**
	 * return the unique prop or combination of props that can be used to store this object.
	 * @param obj
	 */
	static getKey(obj) {
		return obj['id'];
	};

}