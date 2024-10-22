/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import Home from './src/screens/Home';
import {ThemeProvider} from './src/theme/ThemeProvider';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
