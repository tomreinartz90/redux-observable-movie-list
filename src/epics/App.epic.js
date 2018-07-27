import { delay, map } from 'rxjs/operators';
import { ACTIONS, initAppComplete } from '../actions';
import { EpicUtil } from '../util/EpicUtil';


export class AppEpic {
	/**
	 * simple epic to demonstrate how epics can be used with redux
	 */
	static onInit = EpicUtil.onAction(ACTIONS.INIT_APP,
																		delay(100),
																		map(() => initAppComplete()));

	//barrel of all epic functions
	static epics = [AppEpic.onInit];
}

