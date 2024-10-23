import React, {FC} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {
  FetchNextPageOptions,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';

import MovieCard from '../MovieCard';
import {Movie} from '../../services/fetchMovies/types';

interface MoviesListProps {
  movies: Movie[];
  fetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<UseInfiniteQueryResult>;
  isFetchingNextPage: boolean;
  hasNextPage?: boolean;
}

const MoviesList: FC<MoviesListProps> = ({
  movies,
  fetchNextPage,
  isFetchingNextPage,
  hasNextPage,
}) => {
  return (
    <FlatList
      data={movies}
      keyExtractor={item => `${item.id.toString()}-${item.title}`}
      renderItem={({item}) => <MovieCard movie={item} />}
      onEndReached={hasNextPage ? () => fetchNextPage() : undefined}
      onEndReachedThreshold={0.1}
      ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
    />
  );
};

export default MoviesList;
