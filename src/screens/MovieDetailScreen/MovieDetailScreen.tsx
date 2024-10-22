import React from 'react';
import {ActivityIndicator, Image, ScrollView, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import CustomText from '../../components/CustomText';
import useGetMovieDetails from '../../hooks/useGetMovieDetail';
import {MainStackParamList} from '../../navigation/types';
import {styles} from './styles';
import {getImageUri} from '../../helpers/getImageUri';

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
    return <ActivityIndicator />;
  }

  if (error) {
    return <CustomText>Failed to get movie details</CustomText>;
  }
  const genreNames = data.genres.map(genre => genre.name).join(', ');
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.poster_path && (
        <Image
          source={{uri: getImageUri(data.poster_path)}}
          style={styles.poster}
        />
      )}
      <CustomText style={styles.title}>{data.title}</CustomText>
      <CustomText
        style={
          styles.releaseDate
        }>{`Release Date: ${data.release_date}`}</CustomText>
      <CustomText
        style={styles.runtime}>{`Runtime: ${data.runtime} minutes`}</CustomText>
      <CustomText style={styles.genres}>{`Genres: ${genreNames}`}</CustomText>
      <CustomText style={styles.overview}>{data.overview}</CustomText>
    </ScrollView>
  );
};

export default MovieDetailScreen;
