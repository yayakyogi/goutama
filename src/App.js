import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
const App: () => Node = () => {
return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
