import { View, Text } from 'react-native'

interface Props {
  title: string;
  backgroundgColor?: string;
  textColor?: string
}

const Badge = ({ title, backgroundgColor = 'bg-white', textColor = 'text-black' }: Props) => {
  return (
    <View className={`${backgroundgColor} rounded-full px-4 py-2 mr-2`}>
      <Text className={`${textColor} font-medium`}>{title}</Text>
    </View>
  )
}

export default Badge