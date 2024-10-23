import React from 'react';
import {ActivityIndicator} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import useGetMovieDetails from '../../hooks/useGetMovieDetail';
import {MainStackParamList} from '../../navigation/types';
import ErrorComponent from '../../components/ErrorComponent';
import MovieDetail from '../../components/MovieDetails';

interface MovieDetailScreenRouteProp
  extends RouteProp<MainStackParamList, 'MovieDetails'> {
  params: {
    movieId: number;
  };
}

const MovieDetailScreen = () => {
  const route = useRoute<MovieDetailScreenRouteProp>();
  const {movieId} = route.params;
  const {data, isLoading, error} = useGetMovieDetails(movieId);

  if (isLoading) {
    return <ActivityIndicator testID="indicator" />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return <MovieDetail movie={data} />;
};

export default MovieDetailScreen;
