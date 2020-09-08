import axios from 'axios';
import tokenService from './tokenService'

const BASE_URL: string = '/api/user/';


// login functionality ------------------------------------------------------------------

interface FormValues {
	username: string;
	password: string;
}

const login = (creds: FormValues): void => {
    axios
        .post('http://localhost:8080/api/user/authenticate', creds, {
            headers: { 'content-type': 'application/json' }
        })
        .then((response) => {
            return response.data;
        })
        .then(({jwt}) => {
            console.log(jwt);
            tokenService.setToken(jwt);
        })
        .catch((error) => {
            throw new Error('Bad Credentials!');
        });
}

export default {
    // signup,
	// getUser,
	// logout,
	login
}