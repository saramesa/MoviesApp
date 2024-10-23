import React from 'react';
import {ActivityIndicator} from 'react-native';

import useGetMovies from '../../hooks/useGetMovies';
import MoviesList from '../../components/MoviesList';
import ErrorComponent from '../../components/ErrorComponent';

const MoviesListScreen = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useGetMovies();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  const movies = data?.pages.flatMap(page => page.results) || [];

  return (
    <MoviesList
      movies={movies}
      fetchNextPage={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
      hasNextPage={hasNextPage}
    />
  );
};

export default MoviesListScreen;
