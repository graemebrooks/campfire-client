import { TOGGLE_USER_LOGIN, SET_CURRENT_MOVIE, SET_CURRENT_USER, ActionTypes } from './types';

export function toggleUserLogin(status: Boolean): ActionTypes {
	return {
		type: TOGGLE_USER_LOGIN,
		payload: status
	};
}

export function setCurrentMovie(movieId: String): ActionTypes {
	return {
		type: SET_CURRENT_MOVIE,
		payload: movieId
	};
}

export function setCurrentUser(userId: String): ActionTypes {
	return {
		type: SET_CURRENT_USER,
		payload: userId
	};
}
