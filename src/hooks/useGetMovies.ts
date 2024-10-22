import {useInfiniteQuery} from '@tanstack/react-query';

import fetchMovies from '../services/fetchMovies';
import {QueryKeys} from '../queryKeys';

const useGetMovies = () => {
  return useInfiniteQuery(
    [QueryKeys.MOVIES_LIST],
    ({pageParam = 1}) => fetchMovies(pageParam),
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
