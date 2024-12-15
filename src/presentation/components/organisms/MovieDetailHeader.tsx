import { Dimensions, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeIn } from "react-native-reanimated";
import { Movie } from "@/src/domain/entities/Movie";
import BackButton from "../BackButton";
import BookmarkButton from "../BookmarkButton";

interface MovieDetailHeaderProps {
  movie: Movie,
  onBack?: () => void;
}

const { height: screenHeight } = Dimensions.get('window')

export const MovieDetailHeader = ({ movie, onBack }: MovieDetailHeaderProps) => (
  <View className='w-full relative'>
    <Image
      source={{ uri: movie.poster }}
      className='w-full'
      style={{ height: screenHeight * 0.7 }}
      resizeMode="cover"
    />

    <LinearGradient
      colors={['transparent', 'rgba(17, 24, 39, 1)']}
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: screenHeight * 0.4,
      }}
    />

    <Animated.View
      entering={FadeIn.delay(300)}
      className="absolute top-safe-top left-0 right-0 flex-row justify-between items-center px-4 pt-4"
    >
      <BackButton onPress={onBack} />
      <BookmarkButton />
    </Animated.View>
  </View>
)