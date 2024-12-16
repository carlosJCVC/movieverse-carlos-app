import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const BookmarkButton = () => {
  return (
    <TouchableOpacity className='bg-black/30 p-3 rounded-full'>
      <Ionicons name='bookmark-outline' size={24} color="white"></Ionicons>
    </TouchableOpacity>
  )
}

export default BookmarkButton
