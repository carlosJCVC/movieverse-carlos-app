import { View, Text } from 'react-native'
import React from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import "../src/assets/css/global.css";
import { nowPlayingAction } from '@/src/core/actions/movies/now-playing.action';

// Create a client
const queryClient = new QueryClient()

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <View>
        <Text className='text-3xl'>RootLayout</Text>
      </View>
    </QueryClientProvider>
  )
}

export default RootLayout