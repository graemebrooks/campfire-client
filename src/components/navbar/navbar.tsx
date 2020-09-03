import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
	background: #223767;
	height: 4rem;

	p {
		margin: 0;
	}
`;

type navProps = {
	cool: Number;
};

function Navbar(navProps: navProps) {
	return (
		<Nav>
			<p>Im the Navbar! Number = {navProps.cool}</p>
		</Nav>
	);
}

export default Navbar;
