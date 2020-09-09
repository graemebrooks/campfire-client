const removeToken = (): void => {
	localStorage.removeItem('token');
};

const getUserFromToken = (): string | null => {
	const token = getToken();
	return token && JSON.parse(atob(token.split('.')[1])).sub;
};

const getToken = (): string | null => {
	let token = localStorage.getItem('token');
	if (token) {
		// check if token has expired, if so, remove it
		const payload = JSON.parse(atob(token.split('.')[1]));
		if (payload.exp < Date.now() / 1000) {
			localStorage.removeItem('token');
			token = null;
		}
	}
	return token;
};

const setToken = (token: string) => {
	if (token) {
		localStorage.setItem('token', token);
	} else {
		localStorage.removeItem('token');
	}
};

export default {
	setToken,
	getToken,
	removeToken,
	getUserFromToken
};
