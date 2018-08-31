import { ActionCreator } from '../../util/ActionCreator';
import { BaseRepoConstants } from './BaseRepoConstants';

export class BaseRepoActions {
	constants = new BaseRepoConstants();

	_noop() {
	};

	setup(constants) {
		this.constants = constants;
		this.initRepo = ActionCreator.withType(this.constants.INIT_REPO);
		this.updateOne = ActionCreator.withTypeAndPayload(this.constants.UPDATE_ONE);
		this.updateMultiple = ActionCreator.withTypeAndPayload(this.constants.UPDATE_MULTIPLE);
		this.addOne = ActionCreator.withTypeAndPayload(this.constants.ADD_ONE);
		this.addMultiple = ActionCreator.withTypeAndPayload(this.constants.ADD_MULTIPLE);
		this.addOne = ActionCreator.withTypeAndPayload(this.constants.ADD_ONE);
		this.addMultiple = ActionCreator.withTypeAndPayload(this.constants.ADD_MULTIPLE);
		this.removeOne = ActionCreator.withTypeAndPayload(this.constants.REMOVE_ONE);
		this.removeMultiple = ActionCreator.withTypeAndPayload(this.constants.REMOVE_MULTIPLE);
		this.clearAll = ActionCreator.withType(this.constants.CLEAR_ALL);
		this.setState = ActionCreator.withTypeAndPayload(this.constants.SET_STATE);
	}

	/**
	 * used to init the repo, should be handled with a sideEffect
	 */
	initRepo = this._noop();

	/**
	 * update one item in the repo
	 */
	updateOne = this._noop();

	/**
	 * update multiple items at once in the repo, items must be provided via an array
	 */
	updateMultiple = this._noop();

	/**
	 * add one item to the repo
	 */
	addOne = this._noop();

	/**
	 * add multiple items to the repo, items should be provided via an array
	 */
	addMultiple = this._noop();

	/**
	 * delete one item from the repo, key of item must be provided
	 */
	removeOne = this._noop();

	/**
	 * delete multiple items from the repo, keys of to be deleted items must be provided in an array
	 */
	removeMultiple = this._noop();

	/**
	 * clear current data state of the repo
	 */
	clearAll = this._noop();

	/**
	 * set the current state of the repo
	 */
	setState = this._noop();
}