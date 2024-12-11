import { movieApi } from "@/src/core/api/movie-api";
import { Movie, MovieDetails } from "@/src/domain/entities/Movie";
import { MovieDBMoviesResponse } from "../interfaces/moviedb-response";
import { MovieMapper } from "../mappers/movie.mapper";
import { Params } from "../interfaces";
import { MovieDBResponse } from "../interfaces/moviedb-movie.response";

export class MovieService {
  async getNowPlayingMovies(): Promise<Movie[]> {
    try {
      const { data } = await movieApi.get<MovieDBMoviesResponse>(
        "/now_playing"
      );
      const movies = data.results.map(MovieMapper.fromTheMovieDBtOMovie);

      return movies;
    } catch (error) {
      console.log(error);

      throw "Cannot load now playing movies";
    }
  }

  async getTopRatedMovies({ page = 1, limit = 20 }: Params): Promise<Movie[]> {
    try {
      const { data } = await movieApi.get<MovieDBMoviesResponse>("/top_rated", {
        params: {
          page: page,
        },
      });
      const movies = data.results.map(MovieMapper.fromTheMovieDBtOMovie);

      return movies;
    } catch (error) {
      console.log(error);

      throw "Cannot load now playing movies";
    }
  }

  async getPopularMovies({ page = 1, limit = 20 }: Params): Promise<Movie[]> {
    try {
      const { data } = await movieApi.get<MovieDBMoviesResponse>("/popular", {
        params: {
          page: page,
        },
      });
      const movies = data.results.map(MovieMapper.fromTheMovieDBtOMovie);

      return movies;
    } catch (error) {
      console.log(error);

      throw "Cannot load now playing movies";
    }
  }

  async getUpcomingMovies({ page = 1, limit = 20 }: Params): Promise<Movie[]> {
    try {
      const { data } = await movieApi.get<MovieDBMoviesResponse>("/upcoming", {
        params: {
          page: page,
        },
      });
      const movies = data.results.map(MovieMapper.fromTheMovieDBtOMovie);

      return movies;
    } catch (error) {
      console.log(error);

      throw "Cannot load now playing movies";
    }
  }

  async getMovieById(id: number | string): Promise<MovieDetails> {
    try {
      const { data } = await movieApi.get<MovieDBResponse>(`/${id}`);

      return MovieMapper.fromTheMovieDBtoMovieDetails(data);
    } catch (error) {
      console.log(error);

      throw "Cannot load now playing movies";
    }
  }
}
