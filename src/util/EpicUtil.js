import { tap } from 'rxjs/operators';

export class EpicUtil {
	static onAction(action = null, ...sideEffects) {
		return (action$) => action$.pipe(tap(console.log))
															 .ofType(action)
															 .pipe(...sideEffects)
															 .pipe(tap(console.log));
	}
}