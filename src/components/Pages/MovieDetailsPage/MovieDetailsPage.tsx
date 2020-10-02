import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { SystemState, TOGGLE_USER_LOGIN } from '../../../redux/types';

// component imports

// services
import TMDBService from '../../../services/TMDBService';

const Div = styled.div`
	display: flex;
	width: 100%;
	min-height: 80vh;

	#movieContent {
		display: grid;
		grid-template-columns: 1fr 3fr;
		margin: 2rem auto;
	}

	p {
		margin: 0;
	}

	#backdrop {
		width: 100%;
		-webkit-mask-image: -webkit-gradient(
			linear,
			left 80%,
			left bottom,
			from(rgba(0, 0, 0, 1)),
			to(rgba(0, 0, 0, 0))
		);
	}
	#poster {
		max-height: 25rem;
		border-radius: 10px;
		border: 1px solid orange;
		background: red;
	}
`;

function MovieDetailsPage() {
	const [ movieDetails, setmovieDetails ] = useState<any>(null);

	const fetchData = async (movieId: string) => {
		const result = await TMDBService.getMovieById(movieId);
		setmovieDetails(result);
		console.log(movieDetails);
	};

	const currentMovieId = useSelector<SystemState, SystemState['currentMovie']>((state) => state.currentMovie);

	useEffect(() => {
		fetchData(currentMovieId);
	}, []);

	return (
		<Div>
			{movieDetails ? (
				<div>
					<img id="backdrop" src={`http://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`} />
					<div id="movieContent">
						<div>
							<img id="poster" src={`http://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} />
						</div>
						<div>
							<h2>
								{movieDetails.original_title} - {`${movieDetails.release_date.substring(0, 4)}`}
							</h2>
							<p>{movieDetails.overview}</p>
						</div>
					</div>
				</div>
			) : (
				<h1>Movie Details Page</h1>
			)}
		</Div>
	);
}

export default MovieDetailsPage;
