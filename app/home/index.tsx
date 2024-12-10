import React from 'react'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { useMovies } from '@/src/presentation/hooks/useMovies'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import MainSlideShow from '@/src/presentation/components/movies/MainSlideShow'
import MovieHorizontal from '@/src/presentation/components/movies/MovieHorizontal'
import MovieList from '@/src/presentation/components/movies/MovieList'

const HomeScreen = () => {
    const safeArea = useSafeAreaInsets()
    const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies()

    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator color="purple" size={40} />
            </View>
        )
    }

    return (
        <ScrollView className='flex-1 bg-gray-900'>
            <View className='py-6'>
                <MovieList movies={nowPlayingQuery.data ?? []} />
            </View>

            {/* <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
                <Text className='text-3xl font-bold px-4 mb-2'>Movies App</Text>

                <MainSlideShow movies={nowPlayingQuery.data ?? []}></MainSlideShow>

                <MovieHorizontal title='Populars' movies={popularQuery.data ?? []} className='mb-5'></MovieHorizontal>

                <MovieHorizontal title='Top Rated' movies={topRatedQuery.data ?? []} className='mb-5'></MovieHorizontal>

                <MovieHorizontal title='Upcomming' movies={upcomingQuery.data ?? []} className='mb-5'></MovieHorizontal>
            </View> */}
        </ScrollView>
    )
}

export default HomeScreen