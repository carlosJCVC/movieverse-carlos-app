import { Movie } from "@/src/domain/entities/Movie";
import { Result } from "../interfaces";

export class MovieMapper {
  static fromTheMovieDBtOMovie = (movie: Result): Movie => {
    return {
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        releaseDate: new Date(movie.release_date),
        rating: movie.vote_average,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
        adult: movie.adult,
        originalTitle: movie.original_title,
        popularity: movie.popularity,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count,
    };
  };
}
