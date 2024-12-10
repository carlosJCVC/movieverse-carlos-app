import { movieApi } from "@/src/core/api/movie-api";
import { Movie } from "@/src/domain/entities/Movie";
import { MovieDBMoviesResponse } from "../interfaces/moviedb-response";
import { MovieMapper } from "../mappers/movie.mapper";

export class MovieService {
  async getNowPlayingMovies(): Promise<Movie[]> {
    try {
      const { data } = await movieApi.get<MovieDBMoviesResponse>("/now_playing");
      const movies = data.results.map(MovieMapper.fromTheMovieDBtOMovie);

      return movies;
    } catch (error) {
      console.log(error);
  
      throw "Cannot load now playing movies";
    }
  }

  async getTopRatedMovies(): Promise<Movie[]> {
    try {
      const { data } = await movieApi.get<MovieDBMoviesResponse>("/top_rated");
      const movies = data.results.map(MovieMapper.fromTheMovieDBtOMovie);

      return movies;
    } catch (error) {
      console.log(error);
  
      throw "Cannot load now playing movies";
    }
  }

  async getPopularMovies(): Promise<Movie[]> {
    try {
      const { data } = await movieApi.get<MovieDBMoviesResponse>("/popular");
      const movies = data.results.map(MovieMapper.fromTheMovieDBtOMovie);

      return movies;
    } catch (error) {
      console.log(error);
  
      throw "Cannot load now playing movies";
    }
  }

  async getUpcomingMovies(): Promise<Movie[]> {
    try {
      const { data } = await movieApi.get<MovieDBMoviesResponse>("/upcoming");
      const movies = data.results.map(MovieMapper.fromTheMovieDBtOMovie);

      return movies;
    } catch (error) {
      console.log(error);
  
      throw "Cannot load now playing movies";
    }
  }
}
