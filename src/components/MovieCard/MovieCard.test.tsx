import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/native';

import MovieCard from '../MovieCard';
import {getImageUri} from '../../helpers/getImageUri';
import {mockedMovie} from './MovieCard.mock';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
  useTheme: jest.fn().mockReturnValue({colors: 'white'}),
}));

jest.mock('../../helpers/getImageUri', () => ({
  getImageUri: jest.fn(),
}));

describe('MovieCard', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({navigate: mockNavigate});
    (getImageUri as jest.Mock).mockReturnValue('mocked_image_uri');
  });

  it('renders movie details correctly', () => {
    render(<MovieCard movie={mockedMovie} />);

    expect(screen.getByText('Inception')).toBeTruthy();
    expect(screen.getByText('2010-07-16')).toBeTruthy();
    expect(screen.getByLabelText('movie poster')).toBeTruthy();
  });

  it('navigates to movie detail screen when pressed', () => {
    const {getByTestId} = render(<MovieCard movie={mockedMovie} />);
    fireEvent.press(getByTestId('movie-card'));

    expect(mockNavigate).toHaveBeenCalledWith('MovieDetail', {movieId: 1});
  });
});
