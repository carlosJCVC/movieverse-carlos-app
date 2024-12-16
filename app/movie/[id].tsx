import { View, Text, ActivityIndicator, ScrollView, StatusBar, Animated, Dimensions } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router'
import { useGetMovieById } from '@/src/domain/usecases/GetMovieById'
import { MovieDetailHeader } from '@/src/presentation/components/organisms/MovieDetailHeader';
import MovieDetailContent from '@/src/presentation/components/organisms/MovieDetailContent';

//  "Sticky Header Pattern" o "Collapsible Header"
const MovieScreen = () => {
  const { id } = useLocalSearchParams()
  const { data: movie, isLoading } = useGetMovieById(+id)

  if (isLoading || !movie) {
    return (
      <View className='flex flex-1 justify-center items-center bg-gray-900'>
        <Text className='mb-4 text-violet-500 text-center'>Loading movie details...</Text>
        <ActivityIndicator color="#8B5CF6" size="large"></ActivityIndicator>
      </View>
    )
  }

  return (
    <View className='flex-1 bg-gray-900'>
      <StatusBar barStyle="light-content" />

      <ScrollView
        className='flex-1'
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <MovieDetailHeader
          movie={movie}
          onBack={() => router.back()}
        />

        <View className='px-5 -mt-20'>
          <MovieDetailContent movie={movie} />
        </View>
      </ScrollView>
    </View>
  )
}

export default MovieScreen