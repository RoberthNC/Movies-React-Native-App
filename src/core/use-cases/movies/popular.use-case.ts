import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse as PopularResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';

interface Options {
  page?: number;
  limit?: number;
}

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
  options: Options,
) => {
  try {
    const response = await fetcher.get<PopularResponse>('/popular', {
      params: {
        page: options.page ?? 1,
      },
    });
    return response.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    throw new Error('Error fetching movies - Popular');
  }
};
