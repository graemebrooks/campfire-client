import React from 'react';
import styled from 'styled-components';
import emptyMovieImage from '../../assets/emptyMovie.png';
import { useDispatch } from 'react-redux';

// component imports
import { Link } from 'react-router-dom';

// services

const Dropdown = styled.div`
	display: flex;
	width: 30rem;
	padding: 1rem;
	max-height: 40rem;
	overflow-y: auto;
	border-radius: 10px;
	z-index: 8;
	position: relative;
	top: 0.5rem;
	background-color: #161717;
	box-shadow: 0 0 30px rgba(0, 0, 0, 0.65);

	&::-webkit-scrollbar-track {
		background-color: #f5f5f5;
	}

	&::-webkit-scrollbar {
		width: 10px;
		background-color: #f5f5f5;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #ea8f00;
	}

	ul {
		list-style-type: none;
		padding: 0;

		a {
			color: inherit;
			text-decoration: inherit;
		}
	}

	.movieCard {
		display: flex;
		width: 100%;
		padding: 0.5rem;

		img {
			height: 8rem;
			border-radius: 6px;
			margin-left: auto;
		}

		h5 {
			margin-right: auto;
			text-align: left;
		}

		&:hover {
			cursor: pointer;
			img {
				border: 3px solid #ea8f00;
			}

			h5 {
				color: #ea8f00;
			}
		}
	}
`;

function MovieSearchDropdown(props: any) {
	const dispatch = useDispatch();
	const handleMovieSelection = (movieId: String): void => {
		console.log(movieId);
		dispatch({ type: 'SET_CURRENT_MOVIE', payload: movieId });
	};

	return (
		<Dropdown className="dropdown">
			<ul>
				{props.movies.map((movie: any) => {
					return (
						<Link
							to={`/movieDetails/${movie.id}`}
							onClick={() => {
								handleMovieSelection(movie.id);
							}}
						>
							<li className="movieCard">
								<h5>
									{movie.title} {movie.release_date ? `(${movie.release_date.substring(0, 4)})` : ''}
								</h5>
								<img
									alt="Movie Poster"
									src={
										movie.poster_path ? (
											`http://image.tmdb.org/t/p/w185${movie.poster_path}`
										) : (
											emptyMovieImage
										)
									}
								/>
							</li>
						</Link>
					);
				})}
			</ul>
		</Dropdown>
	);
}

export default MovieSearchDropdown;
