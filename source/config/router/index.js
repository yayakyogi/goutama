import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {ButtomTabNavigator, IntroPages} from '../../container/navigation';

const Main = createStackNavigator();

const Router = () => {
  return(
    <Main.Navigator>
        <Main.Screen 
          name="Intro" component={IntroPages} 
          options={{
            headerShown: false,
          }}
          />
        <Main.Screen
          name="Dashboard" component={ButtomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
    </Main.Navigator>
  )
}

export default Router;