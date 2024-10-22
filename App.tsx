/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'react-native';

import Home from './src/screens/Home';
import {ThemeProvider} from './src/theme/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
