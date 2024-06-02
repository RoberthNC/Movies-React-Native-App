import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
