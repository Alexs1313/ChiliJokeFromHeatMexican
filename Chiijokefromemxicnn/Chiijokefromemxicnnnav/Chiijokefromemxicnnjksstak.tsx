import {createStackNavigator} from '@react-navigation/stack';

import Chiijokefromemxicnnjks from '../Chiijokefromemxicnnscrns/Chiijokefromemxicnnjks';

const Stack = createStackNavigator();

const Chiijokefromemxicnnjksstak = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ChiijokefromemxicnnjksHome"
        component={Chiijokefromemxicnnjks}
      />
    </Stack.Navigator>
  );
};

export default Chiijokefromemxicnnjksstak;

