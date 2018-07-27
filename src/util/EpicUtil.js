export class EpicUtil {
	static onAction(action = null, ...sideEffects) {
		return (action$) => action$.ofType(action)
															 .pipe(...sideEffects);
	}
}