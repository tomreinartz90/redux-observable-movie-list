import React from 'react';
import { initMovieList } from '../../actions';
import { ConnectedComponent } from '../../util/ConnectedComponent';

class MovieList extends ConnectedComponent {
	componentDidMount() {
		this.actions.initMovieList();
	}

	static stateProps(state) {
		return { movies: state.movieList.all };
	}

	render() {
		const { movies = [] } = this.props;
		return (
			<ul>
				{movies.map(movie => {
					return (<li key={movie.id}>{movie.title}</li>);
				})}

			</ul>
		);
	}
}

export default MovieList.connected({ initMovieList });
