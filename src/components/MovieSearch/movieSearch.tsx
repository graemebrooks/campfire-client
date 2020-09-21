import React, { useState } from 'react';
import styled from 'styled-components';

// component imports
import MovieSearchDropdown from '../MovieSearch/movieSearchDropdown';

// services
import TMDBService from '../../services/TMDBService';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	input {
		width: 20rem;
		background-color: #161717;
		height: 2.5rem;
		padding: 0.5rem;
		border-radius: 10px;

		color: white;

		&:focus {
			background-color: #f5f5f5;
			color: #000000;
		}
	}
	p {
		margin-top: 2rem;
	}
`;

function MovieSearch(props: any) {
	const [ searchResults, setSearchResults ] = useState<any>(null);

	const handleSearchChange = (values: any): void => {
		if (values.length > 1) {
			const fetchData = async () => {
				const result = await TMDBService.search(values);
				setSearchResults(result.results);
			};
			fetchData();
		}
	};

	return (
		<Div>
			<input name="search" onChange={(e) => handleSearchChange(e.target.value)} />
			{searchResults ? <MovieSearchDropdown movies={searchResults} /> : null}
		</Div>
	);
}

export default MovieSearch;
