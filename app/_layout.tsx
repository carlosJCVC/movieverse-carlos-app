import React from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import "../src/assets/css/global.css";
import { nowPlayingAction } from '@/src/core/actions/movies/now-playing.action';
import { Stack } from 'expo-router';

// Create a client
const queryClient = new QueryClient()

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </QueryClientProvider>
  )
}

export default RootLayout