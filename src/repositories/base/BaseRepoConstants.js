import { ConstantsGenerator } from '../../util/ConstantsGenerator';

export class BaseRepoConstants extends ConstantsGenerator {
	INIT_REPO = null;
	UPDATE_ONE = null;
	UPDATE_MULTIPLE = null;
	ADD_ONE = null;
	ADD_MULTIPLE = null;
	REMOVE_ONE = null;
	REMOVE_MULTIPLE = null;
	CLEAR_ALL = null;
	SET_STATE = null;

	constructor() {
		super();
		this.fillConstants();
	}

}