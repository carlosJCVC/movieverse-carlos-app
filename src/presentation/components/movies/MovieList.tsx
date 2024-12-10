import { View, Text, FlatList, useWindowDimensions } from 'react-native'
import React from 'react'
import { Movie } from '@/src/infrastructure/interfaces'
import MovieCard from './MovieCard'
import Carousel from 'react-native-reanimated-carousel'

interface Props {
    movies: Movie[]
}

const MovieList = ({ movies }: Props) => {
    const width = useWindowDimensions().width;

    return (
        <View className='mb-3'>
            <Carousel
                loop
                data={movies}
                renderItem={({ item }) => <MovieCard movie={item} ></MovieCard>}
                width={width}
                height={350}
                style={{
                    width: width,
                    justifyContent: "center",
                    alignItems: "center",
                }}
                mode='parallax'
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50
                }}
                defaultIndex={1}
            >
            </Carousel>

        </View>
    )
}

export default MovieList