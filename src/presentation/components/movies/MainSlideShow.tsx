import { View, Text, useWindowDimensions } from 'react-native'
import React, { useRef } from 'react'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { Movie } from '@/src/infrastructure/interfaces'
import MoviePoster from './MoviePoster';

interface Props {
    movies: Movie[];
}

const MainSlideShow = ({ movies }: Props) => {
    const ref = useRef<ICarouselInstance>(null)
    const width = useWindowDimensions().width;

    return (
        <View className='h-[250px] w-full'>
            <Carousel
                loop
                ref={ref}
                data={movies}
                renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster}></MoviePoster>}
                width={200}
                height={350}
                // autoPlay={true}
                style={{ backgroundColor: "red", width: width, height: 350, justifyContent: "center", alignItems: "center" }}
                mode='parallax'
            ></Carousel>
        </View>
    )
}

export default MainSlideShow