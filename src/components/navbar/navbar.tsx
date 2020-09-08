import React from 'react';
import styled from 'styled-components';

// component imports
import { Link } from 'react-router-dom';

const Nav = styled.div`
	.nav {
		width: 100vw;
		display: flex;
		justify-content: flex-end;
	}

	.nav-link {
		color: #527cc9;
		text-decoration: none;
	}

	.nav-link:hover {
		color: white;
		text-decoration: none;
	}
`;

type navProps = {
	cool: Number;
};

function Navbar(navProps: navProps) {
	return (
		<Nav className="nav">
			<a>
				<Link className="nav-link" to="/">
					Home
				</Link>
			</a>
			<a>
				<Link className="nav-link" to="/movies">
					Movies
				</Link>
			</a>
			<a>
				<Link className="nav-link" to="/login">
					Login
				</Link>
			</a>
		</Nav>
	);
}

export default Navbar;
