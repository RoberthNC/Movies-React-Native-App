import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'f778202eeb70d5661cb2d264382ec17d',
    language: 'es',
  },
});
