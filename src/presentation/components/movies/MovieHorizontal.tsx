import { View, Text, FlatList, Pressable, useWindowDimensions } from 'react-native'
import { Movie } from '@/src/infrastructure/interfaces'
import { Ionicons } from '@expo/vector-icons';
import MoviePosterCard from './MoviePosterCard';

interface Props {
    title: string;
    movies: Movie[];
    className?: string;
    onSeeAll?: () => void;
}

const MovieHorizontal = ({ title, movies, onSeeAll, className }: Props) => {
    const { width } = useWindowDimensions()

    if (!movies.length) {
        return (<LoadingSkeleton />)
    }

    return (
        <View className={`${className}`}>
            <View className='flex-row justify-between items-center mb-4 px-4'>
                <Text className='text-white text-xl font-semibold'>{title}</Text>

                <Pressable onPress={onSeeAll} className='flex-row items-center'>
                    <Text className='text-blue-400 mr-1'>See All</Text>
                    <Ionicons name='chevron-forward' size={16} color="#60A5FA"></Ionicons>
                </Pressable>
            </View>

            <FlatList
                horizontal
                keyExtractor={(item) => item.id.toString()}
                data={movies}
                renderItem={({ item }) => <MoviePosterCard movie={item}></MoviePosterCard>}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                ItemSeparatorComponent={() => <View style={{ width: 16 }}></View>}
                // snapToInterval={width - 32}
                decelerationRate='fast'
                snapToAlignment='center'
            ></FlatList>
        </View>
    )
}

const LoadingSkeleton = () => {
    return (
        <View className='flex-row px-4 space-x-4'>
            {[1, 2, 3, 4].map((key) => (
                <View
                    key={key}
                    className='w-32 h-48 rounded-lg bg-gray-800 animate-pulse'
                />
            ))}
        </View>
    )
}

export default MovieHorizontal
