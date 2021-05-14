import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

const App: () => Node = () => {
return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
};

export default App;
