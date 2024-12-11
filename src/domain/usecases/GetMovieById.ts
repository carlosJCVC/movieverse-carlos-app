import { useQuery } from "@tanstack/react-query";
import { Movie, MovieDetails } from "@/src/domain/entities/Movie";
import { MovieRepositoryImpl } from "@/src/infrastructure/repositories/MovieRepositoryImpl";
import { MovieService } from "@/src/infrastructure/services/MovieService";

const movieRepository = new MovieRepositoryImpl(new MovieService());

export const useGetMovieById = (id: number) => {
  return useQuery<MovieDetails, Error>({
    queryKey: ["movie", id],
    queryFn: () => movieRepository.getMovieById(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
