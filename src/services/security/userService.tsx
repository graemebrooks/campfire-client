import axios from 'axios';
import tokenService from './tokenService';

const BASE_URL: string = '/api/user/';

// login functionality ------------------------------------------------------------------

interface LoginValues {
	username: string;
	password: string;
}

const login = (creds: LoginValues): void => {
	axios
		.post('http://localhost:8080/api/user/authenticate', creds, {
			headers: { 'content-type': 'application/json' }
		})
		.then((response) => {
			return response.data;
		})
		.then(({ jwt }) => {
			console.log(jwt);
			tokenService.setToken(jwt);
		})
		.catch((error) => {
			throw new Error('Bad Credentials!');
		});
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
