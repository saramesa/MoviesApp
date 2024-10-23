import axios from 'axios';

import fetchMovies from './fetchMovies';
import {mockedResponse} from './fetMovies.mock';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchMovies', () => {
  const page = 1;

  it('fetches successfully data from an API', async () => {
    mockedAxios.get.mockResolvedValueOnce({data: mockedResponse});

    const response = await fetchMovies(page);

    expect(response).toEqual(mockedResponse);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          language: 'en-US',
          page: page,
        },
      },
    );
  });

  it('throws an error when the network response is not ok', async () => {
    mockedAxios.get.mockResolvedValueOnce({data: null});

    await expect(fetchMovies(page)).rejects.toThrow('Error fetching movies');
  });

  it('handles network errors', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

    await expect(fetchMovies(page)).rejects.toThrow('Network Error');
  });
});
