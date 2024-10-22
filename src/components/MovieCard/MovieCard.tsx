import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {Movie} from '../../services/fetchMovies/types';
import CustomText from '../CustomText';

interface MovieItemProps {
  movie: Movie;
}

const getUri = (path: string) => {
  return `https://image.tmdb.org/t/p/original/${path}`;
};

const MovieItem: FC<MovieItemProps> = ({movie}) => {
  const onPress = () => {
    console.log('it should navigate to detail');
  };
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {movie.poster_path && (
        <Image
          source={{
            uri: getUri(movie.poster_path),
          }}
          style={styles.image}
        />
      )}
      <View style={styles.infoContainer}>
        <CustomText style={styles.title}>{movie.title}</CustomText>
        <CustomText style={styles.releaseDate}>{movie.release_date}</CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default MovieItem;
