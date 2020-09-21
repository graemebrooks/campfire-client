import React from 'react';
import styled from 'styled-components';

// component imports
import LoginForm from '../../Forms/LoginForm/LoginForm';

const Div = styled.div`
	display: flex;

	.title {
		margin: 3rem;
	}

	p {
		margin: 0;
	}
`;

function LoginPage() {
	return (
		<Div>
			<LoginForm />
			<h1 className="title">Login Page</h1>
		</Div>
	);
}

export default LoginPage;
