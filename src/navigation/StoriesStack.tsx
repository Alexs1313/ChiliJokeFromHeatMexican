import {createStackNavigator} from '@react-navigation/stack';

import StoriesScreen from '../screens/StoriesScreen';

const Stack = createStackNavigator();

const StoriesStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="StoriesHome"
        component={StoriesScreen}
      />
    </Stack.Navigator>
  );
};

export default StoriesStack;

