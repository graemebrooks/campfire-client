import React from 'react';
import styled from 'styled-components';

// component imports
import MovieSearch from '../../MovieSearch/movieSearch';

const Div = styled.div`
	display: flex;

	.title {
		margin: 3rem;
	}

	p {
		margin: 0;
	}
`;

function MoviesPage() {
	return (
		<Div>
			<h1 className="title">Movies Page</h1>
			<MovieSearch />
		</Div>
	);
}

export default MoviesPage;
