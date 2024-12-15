import { View, Text } from 'react-native'
import { formatCompactNumber } from '@/src/utils'

interface Props {
  budget: number;
  revenue: number;
}

const MovieStats = ({ budget, revenue }: Props) => {
  return (
    <View className='mt-6 flex-row gap-4'>
      <View className='flex-1 bg-gray-800 rounded-2xl p-4'>
        <Text className='text-gray-400 text-sm'>Budget</Text>
        <Text className='text-white font-bold text-lg mt-1'>
          ${formatCompactNumber(budget || 0)}
        </Text>
      </View>

      <View className='flex-1 bg-gray-800 rounded-2xl p-4'>
        <Text className='text-gray-400 text-sm'>Revenue</Text>
        <Text className='text-white font-bold text-lg mt-1'>
          ${formatCompactNumber(revenue || 0)}
        </Text>
      </View>
    </View>
  )
}

export default MovieStats