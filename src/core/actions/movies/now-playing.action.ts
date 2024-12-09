import { MovieDBMoviesResponse } from "@/src/infrastructure/interfaces/moviedb-response";
import { movieApi } from "../../api/movie-api";
import { MovieMapper } from "@/src/infrastructure/mappers/movie.mapper";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/now_playing");

    const movies = data.results.map(MovieMapper.fromTheMovieDBtOMovie);

    // console.log(data, null, 2);
    return movies;
  } catch (error) {
    console.log(error);

    throw "Cannot load now playing movies";
  }
};
