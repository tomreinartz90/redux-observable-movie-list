import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class ConnectedComponent extends React.Component {

	get actions() {
		if (this.props && !this.props.actions) {
			throw new Error(`Actions for ${this.constructor.name} have not been declared yet`);
		}

		return this.props ? this.props.actions : {};
	}

	//pure function used to map the current state to props in the component.
	static stateProps = () => {
		return {};
	};


	static _actionProps = (actions, dispatch) => {
		const boundActions = Object.keys(actions)
															 .reduce((result, key) => {
																 result[key] = bindActionCreators(actions[key], dispatch);
																 return result;
															 }, {});
		return { actions: boundActions };
	};

	static connected(actions) {
		const actionPropMapper = (dispatch) => {
			return this._actionProps(actions, dispatch);
		};
		return connect(this.stateProps, actionPropMapper)(this);
	}
}
