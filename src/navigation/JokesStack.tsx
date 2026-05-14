import {createStackNavigator} from '@react-navigation/stack';

import JokesScreen from '../screens/JokesScreen';

const Stack = createStackNavigator();

const JokesStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="JokesHome"
        component={JokesScreen}
      />
    </Stack.Navigator>
  );
};

export default JokesStack;

