import {useQuery} from '@tanstack/react-query';

import fetchMovies from '../services/fetchMovies';

const useGetMovies = () => {
  return useQuery({
    queryKey: ['moviesList'],
    queryFn: fetchMovies,
  });
};

export default useGetMovies;
