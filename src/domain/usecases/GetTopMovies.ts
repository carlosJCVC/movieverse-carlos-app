import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Movie } from "@/src/domain/entities/Movie";
import { MovieRepositoryImpl } from "@/src/infrastructure/repositories/MovieRepositoryImpl";
import { MovieService } from "@/src/infrastructure/services/MovieService";

const movieRepository = new MovieRepositoryImpl(new MovieService());

export const useGetTopMovies = () => {
  return useInfiniteQuery<Movie[], Error>({
    initialPageParam: 1,
    queryKey: ["movies", "topMovies"],
    queryFn: ({ pageParam = 1 }) =>
      movieRepository.getTopRatedMovies({ page: pageParam as number }),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    getNextPageParam: (lastPage, pages) =>
      lastPage.length === 20 ? pages.length + 1 : undefined,
  });
};
