import { ConstantsGenerator } from '../util/ConstantsGenerator';

class ActionConstants extends ConstantsGenerator {
	INIT_APP = null;
	INIT_APP_DONE = null;

	constructor() {
		super();
		this.fillConstants('app');
	}
}

export const ACTIONS = new ActionConstants();