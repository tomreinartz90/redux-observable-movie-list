import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

export class HttpService {
	static getJSON(url = '', params = new URLSearchParams()) {
		return ajax.get(`${url}${params.toString()}`)
							 .pipe(
								 map(resp => {
									 return resp.response;
								 })
							 );
	}
}