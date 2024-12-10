import { View, useWindowDimensions } from 'react-native'
import { Movie } from '@/src/infrastructure/interfaces'
import MovieCard from './MovieCard'
import Carousel from 'react-native-reanimated-carousel'

interface Props {
    movies: Movie[];
}

const MainMovieCarousel = ({ movies }: Props) => {
    const width = useWindowDimensions().width;

    return (
        <View className='mb-8'>
            <Carousel
                loop
                data={movies}
                renderItem={({ item, index }) => (
                    <View style={{
                        paddingLeft: index === 0 ? 20 : 0,
                        paddingRight: index === movies.length - 1 ? 20 : 0,
                    }}>
                        <MovieCard
                            movie={item}
                            onPress={() => console.log('Movie pressed:', item.title)}
                        ></MovieCard>
                    </View>
                )}
                vertical={false}
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
                    parallaxScrollingOffset: 50,
                    // parallaxAdjacentItemScale: 0.75
                }}
                defaultIndex={1}
                snapEnabled={true}
                pagingEnabled={true}
                autoPlay={movies.length > 1}
                autoPlayInterval={4000}
                scrollAnimationDuration={1000}
                enabled={movies.length > 1}
            >
            </Carousel>

            {/* <View className='flex-row justify-center items-center space-x-1.5'>
                {movies.map((_, index) => (
                    <View className='w-1.5 h-1.5 mx-1 rounded-full bg-gray-500'></View>
                ))}
            </View> */}

        </View>
    )
}

export default MainMovieCarousel