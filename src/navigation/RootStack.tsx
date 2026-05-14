import {createStackNavigator} from '@react-navigation/stack';

import MainTabs from '../components/tab/MainTabs';
import OnboardingScreen from '../screens/OnboardingScreen';
import JokeDetailScreen from '../screens/JokeDetailScreen';
import SplashScreen from '../components/shell/SplashScreen';
import StoryDetailScreen from '../screens/StoryDetailScreen';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
      />
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
      />
      <Stack.Screen
        name="JokeDetail"
        component={JokeDetailScreen}
      />
      <Stack.Screen
        name="StoryDetail"
        component={StoryDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
