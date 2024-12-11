import { Movie, MovieDetails } from "@/src/domain/entities/Movie";
import { Result } from "../interfaces";
import { MovieDBResponse } from "../interfaces/moviedb-movie.response";

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

  static fromTheMovieDBtoMovieDetails = (movie: MovieDBResponse): MovieDetails => {
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
        budget: movie.budget,
        duration: movie.runtime,
        revenue: movie.revenue,
        genres: movie.genres.map((g) => g.name),
        productionCompanies: movie.production_companies.map((p) => p.name),
    };
  };
}
