import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse as PopularResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';

export const moviesPopularUseCase = async (fetcher: HttpAdapter) => {
  try {
    const response = await fetcher.get<PopularResponse>('/popular');
    return response.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    throw new Error('Error fetching movies - Popular');
  }
};
