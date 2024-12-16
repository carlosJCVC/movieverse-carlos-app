import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'

interface Props {
  onPress?: () => void;
}

const BackButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} className='bg-black/30 p-3 rounded-full backdrop-blur-md'>
      <Ionicons name='arrow-back' size={24} color="white"></Ionicons>
    </TouchableOpacity>
  )
}

export default BackButton
