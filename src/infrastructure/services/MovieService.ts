import { movieApi } from "@/src/core/api/movie-api";
import { Movie } from "@/src/domain/entities/Movie";
import { MovieDBMoviesResponse } from "../interfaces/moviedb-response";
import { MovieMapper } from "../mappers/movie.mapper";

export class MovieService {
  async getTopMovies(): Promise<Movie[]> {
    try {
      const { data } = await movieApi.get<MovieDBMoviesResponse>("/now_playing");
      const movies = data.results.map(MovieMapper.fromTheMovieDBtOMovie);

      return movies;
    } catch (error) {
      console.log(error);
  
      throw "Cannot load now playing movies";
    }
  }
}
