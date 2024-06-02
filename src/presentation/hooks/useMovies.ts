import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upComing, setUpComing] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const [nowPlayingMovies, popularMovies, topRatedMovies, upComingMovies] =
      await Promise.all([
        UseCases.moviesNowPlayingUseCase(movieDBFetcher),
        UseCases.moviesPopularUseCase(movieDBFetcher),
        UseCases.moviesTopRatedUseCase(movieDBFetcher),
        UseCases.moviesUpComingUseCase(movieDBFetcher),
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpComing(upComingMovies);

    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upComing,
  };
};
