import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

import useGetMovies from '../../hooks/useGetMovies';

const Home = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useGetMovies();
  console.log('data ', data);
  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch movies</Text>;
  }

  const movies = data?.pages.flatMap((page) => page.results) || [];
  return (
    <View>
      <FlatList
        data={movies}
        renderItem={({ item }) => <Text key={item.id}>{item.title}</Text>}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={hasNextPage ? () => fetchNextPage() : undefined}
        onEndReachedThreshold={0.1}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
      />
    </View>
  );
};

export default Home;
