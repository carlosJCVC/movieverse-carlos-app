import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Movie } from '@/src/infrastructure/interfaces';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    movie: Movie;
    onPress?: () => void;
}

const MovieCard = ({ movie, onPress }: Props) => {
    return (
        <TouchableOpacity
            className='rounded-3xl overflow-hidden bg-gray-800 shadow-2xl mx-2'
            onPress={onPress}
            activeOpacity={0.9}
        >
            <View className='relative w-full h-[320px'>
                <Image
                    className='w-full h-full'
                    alt={movie.title}
                    source={{ uri: movie.poster }}
                    style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover',
                        // position: 'absolute'
                    }}
                    defaultSource={require('@/src/assets/loaders/bottle-loader.gif')}
                ></Image>

                {/* Overlay gradiente superior */}
                <LinearGradient
                    colors={['rgba(0,0,0,0.7)', 'transparent']}
                    style={{
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        height: 70,
                    }}
                />

                {/* Overlay gradiente inferior */}
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.9)']}
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        height: 150,
                    }}
                />

                <View className='absolute top-3 right-3 bg-yellow-500 rounded-xl px-3 py-1.5 flex-row items-center'>
                    <Ionicons name="star" size={18} color="white" />
                    <Text className='text-white font-bold ml-1 text-base'>
                        {movie.rating}
                    </Text>
                </View>

                <View className='absolute top-3 left-3 bg-gray-800/80 rounded-xl px-3 py-1.5'>
                    <Text className='text-white font-semibold'>
                        {movie.releaseDate.getFullYear()}
                    </Text>
                </View>


                {/* <View className='absolute bottom-24 left-3 bg-gray-800/80 rounded-xl px-3 py-1.5 flex-row items-center'>
                    <Ionicons name="time-outline" size={16} color="white" />
                    <Text className='text-white font-semibold ml-1'>
                        {`${30} min`}
                    </Text>
                </View> */}

                <View className='absolute bottom-4 left-4 right-4'>
                    <Text className='text-white font-bold text-xl mb-2' numberOfLines={2}>
                        {movie.title}
                    </Text>

                    <Text className='text-gray-300 text-sm' numberOfLines={2}>
                        {movie.description}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MovieCard