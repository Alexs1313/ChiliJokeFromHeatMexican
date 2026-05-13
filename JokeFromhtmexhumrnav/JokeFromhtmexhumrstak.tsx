import {createStackNavigator} from '@react-navigation/stack';

import JokeFromhtmexhumrtab from '../JokeFromhtmexhumrtab/JokeFromhtmexhumrtab.tsx';
import JokeFromhtmexhumronb from '../JokeFromhtmexhumrscrns/JokeFromhtmexhumronb.tsx';
import JokeFromhtmexhumrjksdtl from '../JokeFromhtmexhumrscrns/JokeFromhtmexhumrjksdtl.tsx';
import JokeFromhtmexhumrload from '../JokeFromhtmexhumrshell/JokeFromhtmexhumrload.tsx';
import JokeFromhtmexhumrstrsdtl from '../JokeFromhtmexhumrscrns/JokeFromhtmexhumrstrsdtl.tsx';

const Stack = createStackNavigator();

const JokeFromhtmexhumrstak = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="JokeFromhtmexhumrload"
        component={JokeFromhtmexhumrload}
      />
      <Stack.Screen
        name="JokeFromhtmexhumronb"
        component={JokeFromhtmexhumronb}
      />
      <Stack.Screen
        name="JokeFromhtmexhumrtab"
        component={JokeFromhtmexhumrtab}
      />
      <Stack.Screen
        name="JokeFromhtmexhumrjksdtl"
        component={JokeFromhtmexhumrjksdtl}
      />
      <Stack.Screen
        name="JokeFromhtmexhumrstrsdtl"
        component={JokeFromhtmexhumrstrsdtl}
      />
    </Stack.Navigator>
  );
};

export default JokeFromhtmexhumrstak;
