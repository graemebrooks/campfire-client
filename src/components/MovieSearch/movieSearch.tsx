import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// component imports
import MovieSearchDropdown from '../MovieSearch/movieSearchDropdown';

// services
import TMDBService from '../../services/TMDBService';

const Div = styled.div`
	display: flex;
	flex-direction: column;
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
