import axios from 'axios';

import {TMDB_API_KEY} from '@env';
import {MovieDetailsResponse} from './types';

const fetchMovieDetails = async (
  movieId: number,
): Promise<MovieDetailsResponse> => {
  const {data} = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
      },
    },
  );

  if (!data) {
    throw new Error('Network response was not ok');
  }
  return data;
};

export default fetchMovieDetails;
