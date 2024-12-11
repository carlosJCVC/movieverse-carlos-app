import { View, Text, FlatList, Pressable, useWindowDimensions, NativeSyntheticEvent, NativeScrollEvent, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import MoviePosterCard from './MoviePosterCard';
import { useCallback, useRef, useState } from 'react';
import { Movie } from '@/src/domain/entities/Movie';
import { InfiniteData, InfiniteQueryObserverResult } from '@tanstack/react-query';

interface Props {
	title: string;
	movies: Movie[];
	className?: string;
	onSeeAll?: () => void;
	loadNextPage?: () => Promise<InfiniteQueryObserverResult<InfiniteData<Movie[], unknown>, Error>>;
	isFetchingNextPage?: boolean;
}

const MovieHorizontal = ({ title, movies, onSeeAll, loadNextPage, isFetchingNextPage = false, className }: Props) => {
	const { width } = useWindowDimensions()
	const [isLoadingMore, setIsLoadingMore] = useState(false)

	if (!movies.length) {
		return (<LoadingSkeleton />)
	}

	const handleLoadMore = async () => {
		if (!loadNextPage || isLoadingMore) return

		setIsLoadingMore(true)
		try {
			await loadNextPage()
		} finally {
			setIsLoadingMore(false)
		}
	}

	const renderFooter = () => {
		if (!isFetchingNextPage) return null;

		return (
			<View className="flex-row justify-center items-center h-[180px] px-4">
				<ActivityIndicator color="white" size="small" />
			</View>
		)
	}

	return (
		<View className={`${className}`}>
			<View className='flex-row justify-between items-center mb-4 px-4'>
				<Text className='text-white text-xl font-semibold'>{title}</Text>

				<Pressable onPress={onSeeAll} className='flex-row items-center'>
					<Text className='text-blue-400 mr-1'>See All</Text>
					<Ionicons name='chevron-forward' size={16} color="#60A5FA"></Ionicons>
				</Pressable>
			</View>

			<FlatList
				horizontal
				keyExtractor={(item) => item.id.toString()}
				data={movies}
				renderItem={({ item }) => <MoviePosterCard movie={item}></MoviePosterCard>}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingHorizontal: 16 }}
				ItemSeparatorComponent={() => <View style={{ width: 16 }}></View>}
				// snapToInterval={width - 32}
				decelerationRate='fast'
				snapToAlignment='center'
				onEndReached={handleLoadMore}
				onEndReachedThreshold={0.5}
				ListFooterComponent={renderFooter}
				// maxToRenderPerBatch={10}
				// windowSize={5}
				// removeClippedSubviews={false}
			></FlatList>
		</View>
	)
}

const LoadingSkeleton = () => {
	return (
		<View className='flex-row px-4 space-x-4'>
			{[1, 2, 3, 4].map((key) => (
				<View
					key={key}
					className='w-32 h-48 rounded-lg bg-gray-800 animate-pulse'
				/>
			))}
		</View>
	)
}

export default MovieHorizontal
