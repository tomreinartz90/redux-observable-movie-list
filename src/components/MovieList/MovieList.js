import React, {Component} from 'react';
import { initMovieList } from '../../actions';
import {ConnectToRedux} from "../../util/connectToRedux/ConnectToRedux";

export class MovieList extends Component {

	selectState(state) {
		return { movies: state.movieList.all };
	}

	render() {
		return (
		<ConnectToRedux mountAction={initMovieList} select={this.selectState} children={(state, actions) => {
			return (
				<ul>
					{console.log(state)}
                    {state && state.movies && state.movies.map(movie => {
                        return (<li key={movie.id}>{movie.title}</li>);
                    })}

				</ul>
            )
        }}/>
		);
	}
}

export default MovieList;
