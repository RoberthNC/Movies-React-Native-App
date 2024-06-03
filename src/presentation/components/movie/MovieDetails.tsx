import {FlatList, Text, View} from 'react-native';
import {FullMovie} from '../../../core/entities/movie.entity';
import {Formatter} from '../../../config/helpers/formatter';
import {Cast} from '../../../core/entities/cast.entity';
import {CastActor} from '../cast/CastActor';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({movie, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#000'}}>{movie?.rating}</Text>
          <Text style={{color: '#000', marginLeft: 5}}>
            - {movie?.genres.join(', ')}
          </Text>
        </View>
        <Text
          style={{
            color: '#000',
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          History
        </Text>
        <Text style={{color: '#000', fontSize: 16}}>{movie?.description}</Text>
        <Text
          style={{
            color: '#000',
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Budget
        </Text>
        <Text style={{color: '#000', fontSize: 18}}>
          {Formatter.currency(movie?.budget)}
        </Text>
      </View>
      {/* Casting */}
      <View style={{marginTop: 10, marginBottom: 30}}>
        <Text
          style={{
            color: '#000',
            marginVertical: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actors
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastActor actor={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};
