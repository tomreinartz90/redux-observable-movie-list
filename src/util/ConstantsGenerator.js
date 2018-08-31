export class ConstantsGenerator {

	fillConstants(namespace = this.constructor.name) {
		Object.keys(this)
					.forEach(key => {
						if (this[key] === null) {
							this[key] = Symbol(`@@dotcontrol/${namespace}/${key}`);
						}
					});
	}
}
