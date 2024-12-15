import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const BookmarkButton = () => {
  return (
    <TouchableOpacity className='bg-gray-900/70 p-2 rounded-full'>
      <Ionicons name='bookmark-outline' size={24} color="white"></Ionicons>
    </TouchableOpacity>
  )
}

export default BookmarkButton
