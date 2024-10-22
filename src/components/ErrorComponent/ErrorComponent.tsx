import React, {FC} from 'react';
import {View} from 'react-native';

import CustomText from '../CustomText';
import {styles} from './styles';

interface ErrorComponentProps {
  error: Error;
}

const ErrorComponent: FC<ErrorComponentProps> = ({error}) => {
  console.log('error ', error)
  return (
    <View style={styles.errorContainer}>
      <CustomText style={styles.errorText}>{error.message}</CustomText>
    </View>
  );
};

export default ErrorComponent;
