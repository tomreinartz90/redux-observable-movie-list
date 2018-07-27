import React from 'react';

import logo from '../logo.svg';
import './App.css';
import { ConnectedComponent } from '../util/ConnectedComponent';
import { initApp } from '../actions';

class App extends ConnectedComponent {
	componentDidMount() {
		this.actions.initApp();
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default App.connected({ initApp });
