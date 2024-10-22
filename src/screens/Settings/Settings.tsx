import React, {useContext} from 'react';
import {Button} from 'react-native';
import {ThemeContext} from '../../theme/ThemeProvider';

const Settings = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const {toggleTheme} = themeContext;

  return <Button title="Toggle theme" onPress={toggleTheme} />;
};

export default Settings;
