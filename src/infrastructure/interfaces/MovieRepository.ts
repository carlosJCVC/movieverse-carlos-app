import { Movie } from "@/src/domain/entities/Movie";

export interface MovieRepository {
  getUpcomingMovies(): Promise<Movie[]>;

  getPopularMovies(): Promise<Movie[]>;

  getTopRatedMovies(): Promise<Movie[]>;

  getNowPlayingMovies(): Promise<Movie[]>;
}
