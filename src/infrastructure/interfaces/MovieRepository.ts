import { Movie } from "@/src/domain/entities/Movie";
import { Params } from "./Params.interface";

export interface MovieRepository {
  getUpcomingMovies(params: Params): Promise<Movie[]>;

  getPopularMovies(params: Params): Promise<Movie[]>;

  getTopRatedMovies(params: Params): Promise<Movie[]>;

  getNowPlayingMovies(): Promise<Movie[]>;
}
