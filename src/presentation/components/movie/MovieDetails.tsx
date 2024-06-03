import {Text, View} from 'react-native';
import {FullMovie} from '../../../core/entities/movie.entity';
import {Formatter} from '../../../config/helpers/formatter';

interface Props {
  movie: FullMovie;
}

export const MovieDetails = ({movie}: Props) => {
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
    </>
  );
};
