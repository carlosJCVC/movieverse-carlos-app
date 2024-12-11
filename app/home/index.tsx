import { View, Text, ActivityIndicator, ScrollView, Pressable } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import MovieHorizontal from '@/src/presentation/components/movies/MovieHorizontal'
import MainMovieCarousel from '@/src/presentation/components/movies/MainMovieCarousel'
import { useGetTopMovies } from '@/src/domain/usecases/GetTopMovies'
import { useGetUpcomingMovies } from '@/src/domain/usecases/GetUpcomingMovies'
import { useGetPopularMovies } from '@/src/domain/usecases/GetPopularMovies'
import { useGetNowPlayingMovies } from '@/src/domain/usecases/GetNowPlayingMovies'

const HomeScreen = () => {
    const safeArea = useSafeAreaInsets()
    const { data: nowPlayingMovies, isLoading: isLoadingNowPlayingMovies } = useGetNowPlayingMovies()
    const topMoviesQuery = useGetTopMovies()
    const upcomingMoviesQuery = useGetUpcomingMovies()
    const popularMoviesQuery = useGetPopularMovies()

    if (isLoadingNowPlayingMovies) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator color="purple" size={40} />
            </View>
        )
    }

    return (
        <ScrollView className='flex-1 bg-gray-900'>
            <View className='py-6' /* style={{ paddingTop: safeArea.top }} */>
                <View className='flex-row justify-between items-center px-4'>
                    <Text className='text-white text-2xl font-bold'>MovieVerse CJ</Text>
                </View>

                <MainMovieCarousel movies={nowPlayingMovies ?? []} />

                <MovieHorizontal
                    title='Top Rated Movies'
                    movies={topMoviesQuery.data?.pages.flat() ?? []}
                    loadNextPage={topMoviesQuery.fetchNextPage}
                    isFetchingNextPage={topMoviesQuery.isFetchingNextPage}
                />

                <MovieHorizontal
                    className='mt-6'
                    title='Popular Movies'
                    movies={popularMoviesQuery.data?.pages.flat() ?? []}
                    loadNextPage={popularMoviesQuery.fetchNextPage}
                    isFetchingNextPage={popularMoviesQuery.isFetchingNextPage}
                />

                <MovieHorizontal
                    className='mt-6'
                    title='Upcoming Movies'
                    movies={upcomingMoviesQuery.data?.pages.flat() ?? []}
                    loadNextPage={upcomingMoviesQuery.fetchNextPage}
                    isFetchingNextPage={upcomingMoviesQuery.isFetchingNextPage}
                />
            </View>
        </ScrollView>
    )
}

export default HomeScreen
