import {View, Text} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const {isLoading, nowPlaying, popular, topRated, upComing} = useMovies();

  if (isLoading) return <Text style={{color: 'black'}}>Loading...</Text>;

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* Main Carousel */}
        <PosterCarousel movies={nowPlaying} />
        {/* Populars Carousel */}
        <HorizontalCarousel movies={popular} title="Populars" />
        {/* Top Rated Carousel */}
        <HorizontalCarousel movies={topRated} title="Top Rated" />
        {/* Up Coming Carousel */}
        <HorizontalCarousel movies={upComing} title="Up Coming" />
      </View>
    </ScrollView>
  );
};
