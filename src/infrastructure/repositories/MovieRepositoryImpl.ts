import { Movie } from "@/src/domain/entities/Movie";
import { MovieRepository } from "../interfaces/MovieRepository";
import { MovieService } from "../services/MovieService";

export class MovieRepositoryImpl implements MovieRepository {
  constructor(private movieService: MovieService) {}

  async getTopMovies(): Promise<Movie[]> {
    const movies = await this.movieService.getTopMovies();
    return movies;
  }
}
