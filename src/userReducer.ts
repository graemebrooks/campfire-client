export interface UserState {
	userLoggedIn: Boolean;
}

const initialState = {
	userLoggedIn: false
};

type Action = { type: 'TOGGLE_USER_LOGIN'; payload: Boolean };

export const userReducer = (state: UserState = initialState, action: Action) => {
	switch (action.type) {
		case 'TOGGLE_USER_LOGIN': {
			return { ...state, userLoggedIn: action.payload };
		}
		default:
			return state;
	}
};
