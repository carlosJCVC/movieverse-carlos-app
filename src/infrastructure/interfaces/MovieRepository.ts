import { Movie } from "@/src/domain/entities/Movie";

export interface MovieRepository {
  getTopMovies(): Promise<Movie[]>;
}
