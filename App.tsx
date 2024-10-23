/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect, useState} from 'react';
import {Appearance} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';

import {ThemeProvider} from './src/theme/ThemeProvider';
import AppNavigator from './src/navigation/AppNavigator';

const queryClient = new QueryClient();

const App = () => {
  const initialColorScheme = Appearance.getColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(initialColorScheme === 'dark');
  const theme = isDarkMode ? DarkTheme : DefaultTheme;
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prevMode => !prevMode);
  }, []);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setIsDarkMode(colorScheme === 'dark');
    });

    return () => subscription.remove();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme} toggleTheme={toggleTheme}>
        <NavigationContainer theme={theme}>
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
