import {createStackNavigator} from '@react-navigation/stack';

import JokeFromhtmexhumrstrs from '../JokeFromhtmexhumrscrns/JokeFromhtmexhumrstrs';

const Stack = createStackNavigator();

const JokeFromhtmexhumrstrsstak = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="JokeFromhtmexhumrstrsHome"
        component={JokeFromhtmexhumrstrs}
      />
    </Stack.Navigator>
  );
};

export default JokeFromhtmexhumrstrsstak;

