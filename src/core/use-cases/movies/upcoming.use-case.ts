import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse as UpComingResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';

export const moviesUpComingUseCase = async (fetcher: HttpAdapter) => {
  try {
    const response = await fetcher.get<UpComingResponse>('/upcoming');
    return response.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - UpComing');
  }
};
