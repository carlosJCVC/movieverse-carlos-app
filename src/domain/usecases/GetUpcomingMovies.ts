import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Movie } from "@/src/domain/entities/Movie";
import { MovieRepositoryImpl } from "@/src/infrastructure/repositories/MovieRepositoryImpl";
import { MovieService } from "@/src/infrastructure/services/MovieService";

const movieRepository = new MovieRepositoryImpl(new MovieService());

export const useGetUpcomingMovies = () => {
  return useInfiniteQuery<Movie[], Error>({
    initialPageParam: 1,
    queryKey: ["movies", "upcoming"],
    queryFn: ({pageParam}) => {
      return movieRepository.getUpcomingMovies({ page: pageParam as number });
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });
};
