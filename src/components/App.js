import React from 'react';

import logo from '../logo.svg';
import './App.css';
import { ConnectedComponent } from '../util/ConnectedComponent';
import { initApp } from '../actions';
import MovieList from './MovieList/MovieList';

class App extends ConnectedComponent {
	componentDidMount() {
		this.actions.initApp();
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Simple movielist</h1>
				</header>
				<MovieList />
			</div>
		);
	}
}

export default App.connected({ initApp });
