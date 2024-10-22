import React, {FC} from 'react';
import {Image, ScrollView} from 'react-native';

import {getImageUri} from '../../helpers/getImageUri';
import CustomText from '../CustomText';
import {styles} from './styles';
import { MovieDetailsResponse } from '../../services/fetchMovieDetails/types';

interface MovieDetailsProps {
  movie: MovieDetailsResponse;
}

const MovieDetails: FC<MovieDetailsProps> = ({movie}) => {
  const genreNames = movie.genres.map(genre => genre.name).join(', ');
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {movie.poster_path && (
        <Image
          source={{uri: getImageUri(movie.poster_path)}}
          style={styles.poster}
        />
      )}
      <CustomText style={styles.title}>{movie.title}</CustomText>
      <CustomText
        style={
          styles.releaseDate
        }>{`Release Date: ${movie.release_date}`}</CustomText>
      <CustomText
        style={
          styles.runtime
        }>{`Runtime: ${movie.runtime} minutes`}</CustomText>
      <CustomText style={styles.genres}>{`Genres: ${genreNames}`}</CustomText>
      <CustomText style={styles.overview}>{movie.overview}</CustomText>
    </ScrollView>
  );
};

export default MovieDetails;
