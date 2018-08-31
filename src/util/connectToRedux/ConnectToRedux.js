import React from 'react';
import PropTypes from 'prop-types';

let reduxStore = null;

export class ConnectToRedux extends React.Component {

	isReady = false;

	static mountStore = (store) => {
		if (!reduxStore) {
			reduxStore = store;
		}
	};

	static propTypes = {
		render: PropTypes.func.isRequired,
		select: PropTypes.func,
		actions: PropTypes.object,
		mountAction: PropTypes.func,
		unMountAction: PropTypes.object,
	};

	constructor(props) {
		super();
		if (!reduxStore) {
			throw new Error('Store must be defined via mountStore to let ConnectToRedux work');
		}

		this.unsub = this.observeStore(reduxStore, props.select || this.selectAll, (newState) => {
			if (this.isReady) {
				this.setState(newState);
			} else {
				this.state = { ...this.state, ...newState };
			}

		});
	}

	selectAll(s) {
		return s;
	}

	observeStore = (store, select, onChange) => {
		let currentState;
		const handleChange = () => {
			let nextState = select(store.getState());
			if (nextState !== currentState) {
				currentState = nextState;
				onChange(currentState);
			}
		};

		let unsubscribe = store.subscribe(handleChange);
		handleChange();
		return unsubscribe;
	};

	componentDidMount() {
		const { mountAction } = this.props;
		this.isReady = true;
		if (mountAction) {
			reduxStore.dispatch(mountAction());
		}
	}

	componentWillUnMount() {
		const { mountAction } = this.props;
		if (mountAction) {
			reduxStore.dispatch(mountAction());
		}

		this.unsub();
	}

	render() {
		const { render, actions } = this.props;
		return render(this.state, actions);
	}
}

