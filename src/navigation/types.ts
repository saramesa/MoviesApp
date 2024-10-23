import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';

export interface MainStackParamList extends ParamListBase {
  MoviesList: undefined;
  MovieDetail: {movieId: number};
}
export interface MoviesListScreenNavigationProp
  extends NativeStackNavigationProp<MainStackParamList, 'MoviesList'> {}
export interface MovieDetailScreenNavigationProp
  extends NativeStackNavigationProp<MainStackParamList, 'MovieDetail'> {}
