import {TMDB_API_KEY} from '@env';

const fetchMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export default fetchMovies;
