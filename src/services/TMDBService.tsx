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

export default {
	search
};
