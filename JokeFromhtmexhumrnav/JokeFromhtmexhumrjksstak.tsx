import {createStackNavigator} from '@react-navigation/stack';

import JokeFromhtmexhumrjks from '../JokeFromhtmexhumrscrns/JokeFromhtmexhumrjks';

const Stack = createStackNavigator();

const JokeFromhtmexhumrjksstak = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="JokeFromhtmexhumrjksHome"
        component={JokeFromhtmexhumrjks}
      />
    </Stack.Navigator>
  );
};

export default JokeFromhtmexhumrjksstak;

