import { SystemState, ActionTypes, TOGGLE_USER_LOGIN, SET_CURRENT_MOVIE } from './types';

const initialState: SystemState = {
	loggedIn: false,
	currentMovie: ''
};

export const AppReducer = (state: SystemState = initialState, action: ActionTypes) => {
	switch (action.type) {
		case TOGGLE_USER_LOGIN: {
			return { ...state, loggedIn: action.payload };
		}
		case SET_CURRENT_MOVIE: {
			return { ...state, currentMovie: action.payload };
		}
		default:
			return state;
	}
};
