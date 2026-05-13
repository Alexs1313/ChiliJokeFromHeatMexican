import {createStackNavigator} from '@react-navigation/stack';

import Chiijokefromemxicnntab from '../Chiijokefromemxicnntab/Chiijokefromemxicnntab.tsx';
import Chiijokefromemxicnnonb from '../Chiijokefromemxicnnscrns/Chiijokefromemxicnnonb.tsx';
import Chiijokefromemxicnnjksdtl from '../Chiijokefromemxicnnscrns/Chiijokefromemxicnnjksdtl.tsx';
import Chiijokefromemxicnnload from '../Chiijokefromemxicnnshell/Chiijokefromemxicnnload.tsx';
import Chiijokefromemxicnnstrsdtl from '../Chiijokefromemxicnnscrns/Chiijokefromemxicnnstrsdtl.tsx';

const Stack = createStackNavigator();

const Chiijokefromemxicnnstak = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Chiijokefromemxicnnload"
        component={Chiijokefromemxicnnload}
      />
      <Stack.Screen
        name="Chiijokefromemxicnnonb"
        component={Chiijokefromemxicnnonb}
      />
      <Stack.Screen
        name="Chiijokefromemxicnntab"
        component={Chiijokefromemxicnntab}
      />
      <Stack.Screen
        name="Chiijokefromemxicnnjksdtl"
        component={Chiijokefromemxicnnjksdtl}
      />
      <Stack.Screen
        name="Chiijokefromemxicnnstrsdtl"
        component={Chiijokefromemxicnnstrsdtl}
      />
    </Stack.Navigator>
  );
};

export default Chiijokefromemxicnnstak;
