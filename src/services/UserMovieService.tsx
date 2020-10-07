import axios from 'axios';
import TokenService from '../services/security/tokenService';

type userMovie = {
	id: string;
	title: string;
	year: Number;
	director: string;
	posterPath: string;
	userId: String;
	hasWatched: Boolean;
	watchListed: Boolean;
	review: string;
	rating: Number | null;
};

const addUserMovie = async (userMovie: userMovie): Promise<any> => {
	console.log(TokenService.getToken());
	axios
		.post('http://localhost:8080/api/usermovies', userMovie, {
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${TokenService.getToken()}`
			}
		})
		.then((res) => {
			console.log(res);
			if (res.status === 200) {
				return res.data;
			}
		})
		.catch((err) => {
			console.log(err);
		});
};

export default {
	addUserMovie
};

export type UserMovie = userMovie;
