import { View, Text } from 'react-native'

interface Props {
  company: string;
}

const ProductionCompanyTag = ({ company }: Props) => {
  return (
    <View className='bg-gray-800 rounded-xl px-4 py-2'>
      <Text className='text-gray-300'>
        {company}
      </Text>
    </View>
  )
}

export default ProductionCompanyTag