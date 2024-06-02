import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse as TopRatedResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter) => {
  try {
    const response = await fetcher.get<TopRatedResponse>('/top_rated');
    return response.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    throw new Error('Error fetching movies - TopRated');
  }
};
