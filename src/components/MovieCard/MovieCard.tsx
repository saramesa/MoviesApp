import React, {FC} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {styles} from './styles';
import {Movie} from '../../services/fetchMovies/types';
import CustomText from '../CustomText';
import {MainStackParamList} from '../../navigation/types';
import {getImageUri} from '../../helpers/getImageUri';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({movie}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const handleOnCardPress = (movieId: number) => {
    navigation.navigate('MovieDetail', {movieId});
  };

  return (
    <TouchableOpacity
      testID="movie-card"
      style={styles.card}
      onPress={() => handleOnCardPress(movie.id)}>
      {movie.poster_path && (
        <Image
          accessibilityLabel="movie poster"
          source={{
            uri: getImageUri(movie.poster_path),
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

export default MovieCard;
