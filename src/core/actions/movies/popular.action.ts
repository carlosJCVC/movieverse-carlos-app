import { MovieDBMoviesResponse } from "@/src/infrastructure/interfaces/moviedb-response";
import { movieApi } from "../../api/movie-api";
import { MovieMapper } from "@/src/infrastructure/mappers/movie.mapper";

export const popularMoviesAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/popular");

    const movies = data.results.map(MovieMapper.fromTheMovieDBtOMovie);

    // console.log(data, null, 2);
    return movies;
  } catch (error) {
    console.log(error);

    throw "Cannot load now playing movies";
  }
};
