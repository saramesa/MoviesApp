import React from 'react';
import {ActivityIndicator} from 'react-native';

import useGetMovies from '../../hooks/useGetMovies';
import MoviesList from '../../components/MoviesList';
import CustomText from '../../components/CustomText';


const Home = () => {
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
    return <CustomText>Failed to get movies</CustomText>;
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

export default Home;
