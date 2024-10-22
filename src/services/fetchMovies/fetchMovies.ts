import axios from 'axios';

import {TMDB_API_KEY} from '@env';
import {MoviesResponse} from './types';

const fetchMovies = async (page: number): Promise<MoviesResponse> => {
  const {data} = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
    {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
        page: page,
      },
    },
  );

  if (!data) {
    throw new Error('Network response was not ok');
  }
  return data;
};

export default fetchMovies;

