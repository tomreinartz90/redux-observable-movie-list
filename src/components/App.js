import React from "react";

import logo from "../logo.svg";
import "./App.css";
import MovieList from "./MovieList/MovieList";

class App extends React.Component {

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

export default App;
