import {createStackNavigator} from '@react-navigation/stack';

import Chiijokefromemxicnnstrs from '../Chiijokefromemxicnnscrns/Chiijokefromemxicnnstrs';

const Stack = createStackNavigator();

const Chiijokefromemxicnnstrsstak = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ChiijokefromemxicnnstrsHome"
        component={Chiijokefromemxicnnstrs}
      />
    </Stack.Navigator>
  );
};

export default Chiijokefromemxicnnstrsstak;

