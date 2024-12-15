import { View, Text, ActivityIndicator, ScrollView, StatusBar, Animated, Dimensions } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router'
import { useGetMovieById } from '@/src/domain/usecases/GetMovieById'
import { MovieDetailHeader } from '@/src/presentation/components/organisms/MovieDetailHeader';
import MovieDetailContent from '@/src/presentation/components/organisms/MovieDetailContent';
import { useRef } from 'react';

const { height: screenHeight } = Dimensions.get('window')
const HEADER_HEIGHT = screenHeight * 0.7  // Altura del header con la imagen
const SCROLL_DISTANCE = HEADER_HEIGHT - 50 // Distancia que se colapsará

//  "Sticky Header Pattern" o "Collapsible Header"
const MovieScreen = () => {
  const { id } = useLocalSearchParams()
  const { data: movie, isLoading } = useGetMovieById(+id)
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, SCROLL_DISTANCE],
    outputRange: [0, -SCROLL_DISTANCE],
    extrapolate: 'clamp'
  })

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, SCROLL_DISTANCE / 2, SCROLL_DISTANCE],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp'
  })

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

        <View className='px-5 -mt-32'>
          <MovieDetailContent movie={movie} />
        </View>
      </ScrollView>
    </View>
  )
}

export default MovieScreen