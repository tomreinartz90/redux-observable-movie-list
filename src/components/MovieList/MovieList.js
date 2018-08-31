import React from 'react';
import { movieRepo } from '../../repositories';
import { ConnectedComponent } from '../../util/ConnectedComponent';

class MovieList extends ConnectedComponent {
	componentDidMount() {
		this.actions.initRepo();
	}

	static stateProps(state) {
		console.log(state);
		return { movies: movieRepo.selector.getAll(state) };
	}

	render() {
		const { movies = [] } = this.props;
		return (
			<ul>
				{movies.map(movie => (<li key={movie.id}>{movie.title}</li>))}

			</ul>
		);
	}
}

export default MovieList.connected({ initRepo: movieRepo.actions.initRepo });