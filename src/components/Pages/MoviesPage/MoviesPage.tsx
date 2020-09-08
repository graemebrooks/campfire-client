import React from 'react';
import styled from 'styled-components';

// component imports
import SignupForm from '../../Forms/SignupForm/SignupForm';

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
			<SignupForm />
			<h1 className="title">Movies Page</h1>
		</Div>
	);
}

export default MoviesPage;
