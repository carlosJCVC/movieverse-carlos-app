import { useQuery } from "@tanstack/react-query";
import { Movie } from "@/src/domain/entities/Movie";
import { MovieRepositoryImpl } from "@/src/infrastructure/repositories/MovieRepositoryImpl";
import { MovieService } from "@/src/infrastructure/services/MovieService";

const movieRepository = new MovieRepositoryImpl(new MovieService());

export const useGetUpcomingMovies = () => {
  return useQuery<Movie[], Error>({
    queryKey: ["movies", "upcoming"],
    queryFn: movieRepository.getUpcomingMovies,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
