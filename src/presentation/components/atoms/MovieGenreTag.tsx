import { Text, View } from "react-native";

interface Props {
  genre: string
}

export const MovieGenreTag = ({ genre }: Props) => (
  <View className='bg-violet-600/20 rounded-full px-4 py-2 mr-2'>
    <Text className='text-violet-400 font-medium'>{genre}</Text>
  </View>
)