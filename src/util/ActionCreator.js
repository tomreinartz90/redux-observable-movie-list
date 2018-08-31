export class ActionCreator {
	static withType(type) {
		return () => ({ type });
	}

	static withTypeAndPayload(type) {
		return (payload) => ({ type, payload });
	}

	static withTypePayloadAndMeta(type) {
		return (payload, meta) => ({ type, payload, meta });
	}
}
