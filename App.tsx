import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import StackNav from './app/navigation/StackNav';

const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default App;
