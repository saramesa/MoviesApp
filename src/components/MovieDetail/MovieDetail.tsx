import React, {FC} from 'react';
import CustomText from '../CustomText';

interface MovieDetailProps {
  movieId: string;
}

const MovieDetail: FC<MovieDetailProps> = ({movieId}) => {
  return <CustomText>{movieId}</CustomText>;
};

export default MovieDetail;
