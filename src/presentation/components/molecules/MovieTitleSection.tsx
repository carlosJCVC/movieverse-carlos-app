import { Text, View } from "react-native";
import { MovieRating } from "../atoms/MovieRating";
import { formatCompactNumber } from "@/src/utils";

interface MovieTitleProps {
  title: string;
  year: number;
  runtime: number;
  rating: number;
  reviews: number;
}

export const MovieTitleSection = ({
  title,
  year,
  runtime,
  rating,
  reviews
}: MovieTitleProps) => (
  <View className='flex-row items-start justify-between'>
    <View className='flex-1 mr-4'>
      <Text className='text-white text-3xl font-bold'>{title}</Text>

      <View className='flex-row items-center mt-2'>
        <Text className='text-gray-400'>{year}</Text>
        <View className='w-1.5 h-1.5 rounded-full bg-gray-400 mx-2' />
        <Text className='text-gray-400'>{runtime} min</Text>
      </View>
    </View>

    <View className='items-end'>
      <MovieRating rating={rating} />

      <Text className='text-gray-400 text-xs mt-1'>
        {formatCompactNumber(reviews)} reviews
      </Text>
    </View>
  </View>
)