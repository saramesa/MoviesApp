import React from 'react';
import {Text, TextProps} from 'react-native';
import {useTheme} from '@react-navigation/native';


const CustomText: React.FC<TextProps> = ({style, ...props}) => {
  const {colors} = useTheme(); // Get colors from theme

  return <Text style={[{color: colors.text}, style]} {...props} />;
};

export default CustomText;
