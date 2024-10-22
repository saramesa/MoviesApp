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

//{"adult": false,
//  "backdrop_path": "/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
//"genre_ids": [878, 27],
//"id": 945961,
//"original_language": "en",
//"original_title": "Alien: Romulus",
//"overview": "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.",
//"popularity": 5036.941,
//"poster_path": "/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
//"release_date": "2024-08-13",
//"title": "Alien: Romulus",
//"video": false,
//"vote_average": 7.286,
//"vote_count": 1764
//},
