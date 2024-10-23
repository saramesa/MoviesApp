import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MoviesListScreen from '../screens/MoviesListScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import {MainStackParamList} from './types';

const Stack = createNativeStackNavigator<MainStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MoviesList" component={MoviesListScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
