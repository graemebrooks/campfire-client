import axios from 'axios';
import tokenService from './tokenService';
import { store } from '../../redux/store';

const BASE_URL: string = 'http://localhost:8080/api/user/';

// login functionality ------------------------------------------------------------------

interface LoginValues {
	username: string;
	password: string;
}

const login = (creds: LoginValues): Boolean => {
	const setCurrentUser = (userId: string): void => {
		store.dispatch({ type: 'SET_CURRENT_USER', payload: userId });
	};
	axios
		.post(`${BASE_URL}authenticate`, creds, {
			headers: { 'content-type': 'application/json' }
		})
		.then((response) => {
			return response.data;
		})
		.then(({ jwt }) => {
			console.log(jwt);
			tokenService.setToken(jwt);
			let userId = getUser();
			console.log(userId);
			if (userId) setCurrentUser(userId);
		})
		.catch((error) => {
			throw new Error('Bad Credentials!');
		});
	return true;
};

// Logout functionality ---------------------------------------------------------

const logout = (): void => {
	tokenService.removeToken();
};

// Get user from token functionality ---------------------------------------------------------

const getUser = (): string | null => {
	return tokenService.getUserFromToken();
};

// Register user functionality ---------------------------------------------------------

interface SignupValues {
	email: string;
	password: string;
	confirmPassword: string;
	firstName: string;
	lastName: string;
}

const signup = async (user: SignupValues): Promise<Boolean> => {
	let successStatus: Boolean = false;
	await axios
		.post('http://localhost:8080/api/user/registration', user)
		.then((res) => {
			console.log(res);
			if (res.status === 200) {
				successStatus = true;
				return res.data;
			}
		})
		.then(({ token }) => tokenService.setToken(token))
		.catch((err) => {
			console.log(err);
		});
	return successStatus;
};

export default {
	signup,
	getUser,
	logout,
	login
};
