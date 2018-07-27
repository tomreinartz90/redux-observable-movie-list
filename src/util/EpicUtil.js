export class EpicUtil {
	static onAction(action = null, ...sideEffects) {
		console.log(sideEffects);
		return (action$) => action$.ofType(action)
															 .pipe(...sideEffects);
	}
}