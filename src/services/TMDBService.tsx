import axios from 'axios';

interface searchResults {
	results: [any];
}

const search = async (query: string): Promise<any> => {
	let result = await axios({
		url: `https://api.themoviedb.org/3/search/movie?api_key=d367945c5d4ae69f54ff775f0d01eb45&language=en-US&query=${query}&page=1&include_adult=false`
	});

	return result.data;
};

const getDirectorByMovie = async (movieId: string): Promise<any> => {
	let result = await axios({
		url: `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d367945c5d4ae69f54ff775f0d01eb45`
	});

	let director = result.data.crew.find((crewMember: any) => crewMember.job == 'Director');

	return director.name;
};

const getMovieById = async (movieId: string): Promise<any> => {
	let result = await axios({
		url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=d367945c5d4ae69f54ff775f0d01eb45&language=en-US`
	});

	return result.data;
};

export default {
	search,
	getDirectorByMovie,
	getMovieById
};
