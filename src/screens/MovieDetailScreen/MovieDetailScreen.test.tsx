import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RouteProp, useRoute} from '@react-navigation/native';

import MovieDetailScreen from './MovieDetailScreen';
import useGetMovieDetails from '../../hooks/useGetMovieDetail';
import {MainStackParamList} from '../../navigation/types';
import {mockMovieData} from './MovieDetailScreen.mock';

jest.mock('../../hooks/useGetMovieDetail');
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useRoute: jest.fn(),
  };
});

const queryClient = new QueryClient();

const mockRoute = (
  movieId: number,
): RouteProp<MainStackParamList, 'MovieDetails'> =>
  ({
    params: {movieId},
  } as RouteProp<MainStackParamList, 'MovieDetails'>);

const renderWithProviders = (movieId: number) => {
  (useRoute as jest.Mock).mockReturnValue(mockRoute(movieId));

  return render(
    <QueryClientProvider client={queryClient}>
      <MovieDetailScreen />
    </QueryClientProvider>,
  );
};

describe('MovieDetailScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading indicator while fetching data', () => {
    (useGetMovieDetails as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    renderWithProviders(123);

    expect(screen.getByTestId('indicator')).toBeDefined();
  });

  it('renders error component when there is an error', () => {
    const mockError = new Error('Network Error');
    (useGetMovieDetails as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: mockError,
    });

    renderWithProviders(123);

    expect(screen.getByText('Network Error')).toBeDefined();
  });

  it('renders movie details when data is fetched successfully', () => {
    (useGetMovieDetails as jest.Mock).mockReturnValue({
      data: mockMovieData,
      isLoading: false,
      error: null,
    });

    renderWithProviders(123);
    expect(screen.getByText('Inception')).toBeDefined();
    expect(screen.getByText('Release Date: 2010-07-16')).toBeDefined();
    expect(screen.getByText('Runtime: 134 minutes')).toBeDefined();
    expect(screen.getByText('Genres: comedy')).toBeDefined();
    expect(
      screen.getByText(
        'A thief who steals corporate secrets through the use of dream-sharing technology.',
      ),
    ).toBeDefined();
  });
});
