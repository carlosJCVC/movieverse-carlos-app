import { useQuery } from "@tanstack/react-query";
import { Movie } from "@/src/domain/entities/Movie";
import { MovieRepositoryImpl } from "@/src/infrastructure/repositories/MovieRepositoryImpl";
import { MovieService } from "@/src/infrastructure/services/MovieService";

const movieRepository = new MovieRepositoryImpl(new MovieService());

export const useGetTopMovies = () => {
  return useQuery<Movie[], Error>({
    queryKey: ["movies", "topMovies"],
    queryFn: movieRepository.getTopRatedMovies,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
