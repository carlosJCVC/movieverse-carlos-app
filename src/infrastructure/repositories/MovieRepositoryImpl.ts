import { Movie } from "@/src/domain/entities/Movie";
import { MovieRepository } from "../interfaces/MovieRepository";
import { MovieService } from "../services/MovieService";

export class MovieRepositoryImpl implements MovieRepository {
  constructor(private movieService: MovieService) {}

  getUpcomingMovies = async (): Promise<Movie[]> => {
    const movies = await this.movieService.getUpcomingMovies();

    return movies;
  };

  getPopularMovies = async (): Promise<Movie[]> => {
    const movies = await this.movieService.getPopularMovies();

    return movies;
  };

  getTopRatedMovies = async (): Promise<Movie[]> => {
    const movies = await this.movieService.getTopRatedMovies();

    return movies;
  };

  getNowPlayingMovies = async (): Promise<Movie[]> => {
    const movies = await this.movieService.getNowPlayingMovies();

    return movies;
  };
}
