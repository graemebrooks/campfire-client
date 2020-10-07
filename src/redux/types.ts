export interface SystemState {
	loggedIn: Boolean;
	currentUser: String | null,
	currentMovie: any;
}

export const SET_CURRENT_MOVIE = 'SET_CURRENT_MOVIE';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const TOGGLE_USER_LOGIN = 'TOGGLE_USER_LOGIN';

interface ToggleUserLoginAction {
	type: typeof TOGGLE_USER_LOGIN;
	payload: Boolean;
}

interface SetCurrentMovieAction {
	type: typeof SET_CURRENT_MOVIE;
	payload: String;
}

interface SetCurrentUserAction {
	type: typeof SET_CURRENT_USER;
	payload: String;
}

export type ActionTypes = ToggleUserLoginAction | SetCurrentMovieAction | SetCurrentUserAction;
