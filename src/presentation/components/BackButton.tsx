import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native'

interface Props {
  onPress?: () => void;
}

const BackButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} className='bg-gray-900/70 p-2 rounded-full'>
      <Ionicons name='arrow-back' size={24} color="white"></Ionicons>
    </TouchableOpacity>
  )
}

export default BackButton
