import axios from 'axios';

import {TMDB_API_KEY} from '@env';

const fetchMovies = async (page: number) => {
  const {data} = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`,
  );
  if (!data) {
    throw new Error('Network response was not ok');
  }
  return data;
};

export default fetchMovies;
