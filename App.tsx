/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Theme} from '@react-navigation/native';

import SettingsScreen from './src/screens/Settings';
import {ThemeProvider} from './src/theme/ThemeProvider';
import {darkTheme, lightTheme} from './src/theme/theme';
import AppNavigator from './src/navigation/AppNavigator';

const queryClient = new QueryClient();
const Tab = createBottomTabNavigator();


const App = () => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme.dark ? lightTheme : darkTheme));
  };
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme} toggleTheme={toggleTheme}>
        <NavigationContainer theme={theme}>

          <Tab.Navigator>
            <Tab.Screen name="Movies" component={AppNavigator} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
