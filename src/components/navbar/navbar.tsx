import React from 'react';
import styled from 'styled-components';
import userService from '../../services/security/userService';

// component imports
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SystemState, TOGGLE_USER_LOGIN } from '../../redux/types';

const Nav = styled.div`
	background-color: #161717;
	height: 4.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 2rem;

	.nav {
		width: 60vw;
		display: flex;
		justify-content: flex-start;
	}

	.nav-link {
		color: white;
		text-decoration: none;
		list-style: none;
	}

	.nav-link:hover {
		color: #ea8f00;
		text-decoration: none;
	}

	ul {
		margin: 0;
	}

	#loginStatus {
		margin-left: auto;
	}
`;

type navProps = {
	cool: Number;
};

function Navbar(navProps: navProps) {
	const userLoggedIn = useSelector<SystemState, SystemState['loggedIn']>((state) => state.loggedIn);
	const dispatch = useDispatch();
	const logoutUser = () => {
		userService.logout();
		dispatch({ type: 'TOGGLE_USER_LOGIN', payload: false });
	};

	let authNav = userLoggedIn ? (
		<ul>
			<Link className="nav-link" to="/">
				<li onClick={logoutUser}>Logout</li>
			</Link>
		</ul>
	) : (
		<ul>
			<Link className="nav-link" to="/login">
				<li>Login</li>
			</Link>
		</ul>
	);

	return (
		<Nav>
			<div className="nav">
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
				<a id="loginStatus">{authNav}</a>
			</div>
		</Nav>
	);
}

export default Navbar;
