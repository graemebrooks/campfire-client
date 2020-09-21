import React from 'react';
import styled from 'styled-components';

// component imports
import SignupForm from '../../Forms/SignupForm/SignupForm';


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
		</Div>
	);
}

export default HomePage;
