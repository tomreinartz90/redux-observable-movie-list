import React, { Component } from 'react';
import { initMovieList } from '../../actions';
import { ConnectToRedux } from '../../util/connectToRedux/ConnectToRedux';
import { movieRepo } from 'src/repositories/movies';

export class MovieList extends Component {

	selectState(state) {
		return { movies: movieRepo.selector.getAll(state) };
	}

	render() {
		return (
			<ConnectToRedux
				mountAction={initMovieList} select={this.selectState} render={(state, actions) => (
				<ul>
					{console.log(state)}
					{state && state.movies && state.movies.map(movie => {
						return (<li key={movie.id}>{movie.title}</li>);
					})}

				</ul>
			)}
			/>
		);
	}
}

export default MovieList;
