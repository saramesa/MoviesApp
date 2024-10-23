import {MoviesResponse} from './types';

export const mockedResponse: MoviesResponse = {
  page: 1,
  total_results: 100,
  total_pages: 10,
  results: [
    {
      id: 123,
      title: 'Test Movie',
      poster_path: '/some-path',
      release_date: '2024-05-20',
    },
  ],
};
