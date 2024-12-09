import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useMovies } from '@/src/presentation/hooks/useMovies'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

const HomeScreen = () => {
    const safeArea = useSafeAreaInsets()
    const { nowPlayingQuery } = useMovies()

    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator color="purple" size={40} />
            </View>
        )
    }

    return (
        <View className='mt-2' style={{paddingTop: safeArea.top}}>
            <Text className='text-3xl font-bold px-4 mb-2'>HomeScreen</Text>
            <Text>{JSON.stringify(nowPlayingQuery.data)}</Text>
        </View>
    )
}

export default HomeScreen