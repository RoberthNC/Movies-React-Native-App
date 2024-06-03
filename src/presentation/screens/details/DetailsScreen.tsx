import {StackScreenProps} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigation';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {MovieDetails} from '../../components/movie/MovieDetails';
import {ScrollView} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;
  const {isLoading, movie} = useMovie(movieId);

  if (isLoading) return <Text style={{color: '#000'}}>Loading</Text>;
  return (
    <ScrollView>
      {/* Header */}
      <MovieHeader
        poster={movie?.poster}
        originalTitle={movie?.originalTitle}
        title={movie?.title}
      />
      {/* Details */}
      <MovieDetails movie={movie!} />
      {/* Casting */}
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            color: '#000',
            marginVertical: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actors
        </Text>
      </View>
    </ScrollView>
  );
};
