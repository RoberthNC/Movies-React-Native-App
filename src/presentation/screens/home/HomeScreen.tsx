import {View, Text} from 'react-native';
import {useMovies} from '../../hooks/useMovies';

export const HomeScreen = () => {
  const {} = useMovies();

  return (
    <View>
      <Text style={{color: '#000'}}>HomeScreen</Text>
    </View>
  );
};
