import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { SystemState, TOGGLE_USER_LOGIN } from '../../../redux/types';

// component imports

// services
import TMDBService from '../../../services/TMDBService';

const Div = styled.div`
	display: flex;

	.title {
		margin: 3rem;
	}

	p {
		margin: 0;
	}
`;

function MovieDetailsPage() {
	const [ movieData, setMovieData ] = useState<any>(null);

	const fetchData = async (movieId: string) => {
		const result = await TMDBService.getMovieById(movieId);
		setMovieData(result);
		console.log(movieData);
	};

	const currentMovieId = useSelector<SystemState, SystemState['currentMovie']>((state) => state.currentMovie);

	useEffect(() => {
		fetchData(currentMovieId);
	}, []);

	return <Div>{movieData ? <p>{movieData.original_title}</p> : <h1>Movie Details Page</h1>}</Div>;
}

export default MovieDetailsPage;
