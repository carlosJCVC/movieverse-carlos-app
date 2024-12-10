import { View, Text, Pressable, Image } from 'react-native'
import { Movie } from '@/src/domain/entities/Movie'
import { Ionicons } from '@expo/vector-icons'
import { formatCompactNumber } from '@/src/utils'

interface Props {
  movie: Movie
}

const MoviePosterCard = ({ movie }: Props) => {
  return (
    <Pressable className={`active:opacity-90`}>
      <View className='relative rounded-lg overflow-hidden'>
        <Image
          source={{ uri: movie.poster }}
          className='w-[125px] h-[180px] shadow-lg rounded-2xl'
          style={{ resizeMode: 'cover' }}
        ></Image>

        <View className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent px-2'>
          <Text className='text-white font-semibold' numberOfLines={1}>{movie.title}</Text>
        </View>

        <View className='absolute top-0 left-0 bg-gradient-to-t from-black to-transparent px-2'>
          <View className='flex-row items-center mt-1'>
            <Ionicons name="star" size={12} color="#FCD34D" />
            <Text className='text-white text-xs ml-1'>
              {movie.rating.toFixed(1)}
            </Text>
          </View>
        </View>

        <View className='absolute top-0 right-0 bg-gradient-to-t from-black to-transparent px-2'>
          <View className='flex-row items-center mt-1'>
            <Text className='text-white text-xs ml-1'>
              {formatCompactNumber(movie.popularity)}
            </Text>
          </View>
        </View>
      </View>
    </Pressable >
  )
}

export default MoviePosterCard
