import { View, Text } from 'react-native'
import React from 'react'

interface Props {
  overview: string
}

const MovieOverview = ({ overview }: Props) => {
  return (
    <>
      <Text className='text-white text-xl font-semibold mb-3'>
        Overview
      </Text>
      <Text className='text-gray-300 leading-6 text-[15px] text-justify'>
        {overview}
      </Text>
    </>
  )
}

export default MovieOverview