import {useInfiniteQuery} from '@tanstack/react-query';

import fetchMovies from '../services/fetchMovies/fetchMovies';
import {QueryKeys} from '../queryKeys';
import { MoviesResponse } from '../services/fetchMovies/types';

const useGetMovies = () => {
  return useInfiniteQuery<MoviesResponse, Error>(
    [QueryKeys.MOVIES_LIST],
    ({ pageParam = 1 }: { pageParam?: number }) => fetchMovies(pageParam),
    {
      getNextPageParam: lastPage => {
        return lastPage.page < lastPage.total_pages
          ? lastPage.page + 1
          : undefined;
      },
    },
  );
};

export default useGetMovies;
