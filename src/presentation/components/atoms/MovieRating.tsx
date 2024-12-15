import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface Props {
  rating: number
}

export const MovieRating = ({ rating }: Props) => (
  <View className='flex-row items-center bg-yellow-500/20 rounded-lg px-3 py-2'>
    <Ionicons name="star" size={20} color="#FCD34D" />

    <Text className='text-yellow-500 font-bold ml-1'>
      {rating.toFixed(1)}
    </Text>
  </View>
)
