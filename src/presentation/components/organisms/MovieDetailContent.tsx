import { View, Text } from 'react-native'
import React from 'react'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { MovieDetails as Movie } from '@/src/domain/entities/Movie'
import { MovieTitleSection } from '../molecules/MovieTitleSection'
import { MovieGenreList } from '../molecules/MovieGenreList'
import MovieOverview from '../atoms/MovieOverview'
import MovieStats from '../molecules/MovieStats'
import MovieProductionSection from '../molecules/MovieProductionSection'

interface Props {
  movie: Movie
}

const MovieDetailContent = ({ movie }: Props) => (
  <Animated.View entering={FadeInDown.duration(400).delay(200)}>
    <MovieTitleSection
      title={movie.title}
      year={movie.releaseDate.getFullYear()}
      runtime={movie.duration}
      rating={movie.voteAverage}
      reviews={movie.voteCount}
    />

    <MovieGenreList genres={movie.genres || []} />

    <MovieOverview overview={movie.description} />

    <MovieStats
      budget={movie.budget}
      revenue={movie.revenue}
    />

    <MovieProductionSection companies={movie.productionCompanies} />
  </Animated.View>
)

export default MovieDetailContent