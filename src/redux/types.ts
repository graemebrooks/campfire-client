export interface SystemState {
	loggedIn: Boolean;
	currentMovie: any;
}

export const SET_CURRENT_MOVIE = 'SET_CURRENT_MOVIE';
export const TOGGLE_USER_LOGIN = 'TOGGLE_USER_LOGIN';

interface ToggleUserLoginAction {
	type: typeof TOGGLE_USER_LOGIN;
	payload: Boolean;
}

interface SetCurrentMovieAction {
	type: typeof SET_CURRENT_MOVIE;
	payload: String;
}

export type ActionTypes = ToggleUserLoginAction | SetCurrentMovieAction;
