import { Movie, MovieDetails } from "@/src/domain/entities/Movie";
import { MovieRepository } from "../interfaces/MovieRepository";
import { MovieService } from "../services/MovieService";
import { Params } from '../interfaces/Params.interface';

export class MovieRepositoryImpl implements MovieRepository {
  constructor(private movieService: MovieService) {}

  getUpcomingMovies = async (params: Params): Promise<Movie[]> => {
    const movies = await this.movieService.getUpcomingMovies(params);

    return movies;
  };

  getPopularMovies = async (params: Params): Promise<Movie[]> => {
    const movies = await this.movieService.getPopularMovies(params);

    return movies;
  };

  getTopRatedMovies = async (params: Params): Promise<Movie[]> => {
    const movies = await this.movieService.getTopRatedMovies(params);

    return movies;
  };

  getNowPlayingMovies = async (): Promise<Movie[]> => {
    const movies = await this.movieService.getNowPlayingMovies();

    return movies;
  };

  getMovieById = async (id: number|string): Promise<MovieDetails> => {
    const movie = await this.movieService.getMovieById(id);

    return movie;
  };
}
