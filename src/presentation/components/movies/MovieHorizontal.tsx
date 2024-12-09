import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Movie } from '@/src/infrastructure/interfaces'
import MoviePoster from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
    className?: string,
}

const MovieHorizontal = ({ title, movies, className }: Props) => {
    return (
        <View className={className}>
            {title && <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>}

            <FlatList
                horizontal
                keyExtractor={(item) => `${item.id}`}
                data={movies}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster></MoviePoster>}
            ></FlatList>
        </View>
    )
}

export default MovieHorizontal