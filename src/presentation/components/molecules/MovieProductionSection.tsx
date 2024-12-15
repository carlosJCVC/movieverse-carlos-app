import { View, Text } from 'react-native'
import ProductionCompanyTag from '../atoms/ProductionCompanyTag'

interface Props {
  companies: string[]
}

const MovieProductionSection = ({ companies }: Props) => {
  return (
    <View className='mt-6 mb-8'>
      <Text className='text-white text-xl font-semibold mb-4'>
        Production
      </Text>

      <View className='flex-row flex-wrap gap-3'>
        {companies.map((company, index) => (
          <ProductionCompanyTag key={index} company={company} />
        ))}
      </View>
    </View>
  )
}

export default MovieProductionSection