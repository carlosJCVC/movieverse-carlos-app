import { Text, View } from "react-native";

interface StatCardProps {
  label: string;
  value: string | number;
}

export const StatCard = ({ label, value }: StatCardProps) => (
  <View className='flex-1 bg-gray-800 rounded-2xl p-4'>
    <Text className='text-gray-400 text-sm'>{label}</Text>
    <Text className='text-white font-bold text-lg mt-1'>
      {value}
    </Text>
  </View>
)