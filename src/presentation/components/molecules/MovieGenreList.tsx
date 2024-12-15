import { ScrollView } from "react-native";
import { MovieGenreTag } from "../atoms/MovieGenreTag";

interface Props {
  genres: string[]
}

export const MovieGenreList = ({ genres }: Props) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    className='mt-4'
  >
    {genres.map((genre, index) => (
      <MovieGenreTag key={index} genre={genre} />
    ))}
  </ScrollView>
)
