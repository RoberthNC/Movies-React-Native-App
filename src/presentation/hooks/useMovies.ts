import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const [resp1, resp2, resp3, resp4] = await Promise.all([
      UseCases.moviesNowPlayingUseCase(movieDBFetcher),
      UseCases.moviesPopularUseCase(movieDBFetcher),
      UseCases.moviesTopRatedUseCase(movieDBFetcher),
      UseCases.moviesUpComingUseCase(movieDBFetcher),
    ]);
  };
  return {
    isLoading,
    nowPlaying,
  };
};
