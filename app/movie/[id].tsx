import { View, Text, ActivityIndicator, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useGetMovieById } from '@/src/domain/usecases/GetMovieById'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { formatCompactNumber } from '@/src/utils';

const { height: screenHeight } = Dimensions.get('window')

const MovieScreen = () => {
  const { id } = useLocalSearchParams()
  const { data: movie, isLoading } = useGetMovieById(+id)

  if (isLoading || !movie) {
    return (
      <View className='flex flex-1 justify-center items-center'>
        <Text className='mb-4 text-center'>Please wait...</Text>
        <ActivityIndicator color="purple" size={30}></ActivityIndicator>
      </View>
    )
  }

  return (
    <ScrollView className='flex-1 bg-gray-900'>
      <View>
        <Image
          source={{ uri: movie.poster }}
          className='w-full'
          style={{ height: screenHeight * 0.6 }}
        ></Image>

        <LinearGradient
          colors={['transparent', 'rgba(17, 24, 39, 1)']}
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 200,
          }}
        />

        <TouchableOpacity className='absolute top-12 left-4 bg-gray-900/60 p-2 rounded-full'>
          <Ionicons name='arrow-back' size={24} color="white"></Ionicons>
        </TouchableOpacity>
      </View>

      <View className='-mt-32 px-5'>
        <View className='flex-row items-start justify-between'>
          <View className='flex-1 mr-4'>
            <Text className='text-white text-3xl font-bold'>{movie.title}</Text>
            <Text className='text-gray-400 mt-1'>{movie.releaseDate.getFullYear()}</Text>
          </View>

          <View className='bg-yellow-500 rounded-lg px-3 py-2 items-center'>
            <Ionicons name="star" size={20} color="white" />
            <Text className='text-white font-bold mt-1'>
              {movie.voteAverage.toFixed(1)}
            </Text>
          </View>
        </View>

        <View className='flex-row flex-wrap gap-2 mt-4'>
          {movie.genres.map((genre, index) => (
            <View
              key={index}
              className='bg-gray-800 rounded-full px-4 py-1'
            >
              <Text className='text-gray-300 text-sm'>{genre}</Text>
            </View>
          ))}
        </View>

        <View className='flex-row justify-between mt-6 bg-gray-800 rounded-2xl p-4'>
          <View className='items-center'>
            <Text className='text-gray-400 text-sm'>Duration</Text>
            <Text className='text-white font-bold mt-1'>
              {movie.duration} min
            </Text>
          </View>
          <View style={{ width: 1 }} className='bg-gray-700' />
          <View className='items-center'>
            <Text className='text-gray-400 text-sm'>Budget</Text>
            <Text className='text-white font-bold mt-1'>
              ${formatCompactNumber(movie.budget || 0)}
            </Text>
          </View>
          <View style={{ width: 1 }} className='bg-gray-700' />
          <View className='items-center'>
            <Text className='text-gray-400 text-sm'>Revenue</Text>
            <Text className='text-white font-bold mt-1'>
              ${formatCompactNumber(movie.revenue || 0)}
            </Text>
          </View>
        </View>

        <View className='mt-6'>
          <Text className='text-white text-xl font-semibold mb-2'>
            Overview
          </Text>
          <Text className='text-gray-300 leading-6'>
            {movie.description}
          </Text>
        </View>

        <View className='mt-6 mb-8'>
          <Text className='text-white text-xl font-semibold mb-4'>
            Production
          </Text>
          <View className='flex-row flex-wrap gap-4'>
            {movie.productionCompanies.map((company, index) => (
              <View
                key={index}
                className='bg-gray-800 rounded-lg p-3 items-center'
              >
                <Text className='text-white text-center'>
                  {company}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default MovieScreen