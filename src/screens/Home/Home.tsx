import React from 'react';
import {Button, Text, View} from 'react-native';

import {useTheme} from '../../theme/ThemeProvider';

const Home = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View style={{backgroundColor: theme.colors.background}}>
      <Text>Home</Text>
      <Button
        title="Change theme"
        onPress={toggleTheme}
        color={theme.colors.primary}
      />
    </View>
  );
};

export default Home;
