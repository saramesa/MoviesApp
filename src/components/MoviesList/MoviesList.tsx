import React, {FC} from 'react';
import {ActivityIndicator, FlatList, Text} from 'react-native';

interface MoviesListProps {
  movies: any;
  fetchNextPage: any;
  isFetchingNextPage: any;
  hasNextPage: any;
}

const MoviesList: FC<MoviesListProps> = ({movies, fetchNextPage, isFetchingNextPage, hasNextPage}) => {
  return (
    <FlatList
      data={movies}
      keyExtractor={item => `${item.id.toString()}-${item.title}`}
      renderItem={({item}) => <Text>{item.title}</Text>}
      onEndReached={hasNextPage ? () => fetchNextPage() : undefined}
      onEndReachedThreshold={0.1}
      ListFooterComponent={isFetchingNextPage ? <ActivityIndicator/> : null}
    />
  );
};

export default MoviesList;
