import {useQuery} from '@tanstack/react-query';

import {QueryKeys} from '../queryKeys';
import {MovieDetails} from '../services/fetchMovieDetails/types';
import fetchMovieDetails from '../services/fetchMovieDetails/fetchMovieDetails';

const useGetMovieDetails = (movieId: number) => {
  return useQuery<MovieDetails, Error>([QueryKeys.MOVIE_DETAILS], () =>
    fetchMovieDetails(movieId),
  );
};

export default useGetMovieDetails;
