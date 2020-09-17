import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// component imports
import SignupForm from '../../Forms/SignupForm/SignupForm';
import MovieSearch from '../../MovieSearch/movieSearch';

// services

const Div = styled.div`
	display: flex;

	.title {
		margin: 3rem;
	}
`;

function HomePage() {
	return (
		<Div>
			<SignupForm />
			<h1 className="title">Home Page</h1>
			<MovieSearch />
		</Div>
	);
}

export default HomePage;
