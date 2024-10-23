import {renderHook} from '@testing-library/react-native';
import {useQuery} from '@tanstack/react-query';
import useGetMovieDetails from './useGetMovieDetail';

jest.mock('@tanstack/react-query');

const mockMovieId = 123;

describe('useGetMovieDetails', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns movie details successfully', async () => {
    const mockData = {title: 'Test Movie', id: mockMovieId};
    (useQuery as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
    });

    const {result} = renderHook(() => useGetMovieDetails(mockMovieId));

    expect(result.current.data).toEqual(mockData);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(undefined);
  });

  it('handles loading state', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    });

    const {result} = renderHook(() => useGetMovieDetails(mockMovieId));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(undefined);
  });

  it('handles error state', async () => {
    const mockError = new Error('Failed to get movie details');
    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
      error: mockError,
    });

    const {result} = renderHook(() => useGetMovieDetails(mockMovieId));

    expect(result.current.error).toEqual(mockError);
    expect(result.current.data).toBe(null);
    expect(result.current.isLoading).toBe(false);
  });
});
