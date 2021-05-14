import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 
import {Splash,Slide,WelcomeHome,Login,Register,User} from '../pages';
const Stack = createStackNavigator();

const Router = () => {
  return(
    <Stack.Navigator>
        <Stack.Screen 
            name="Splash" component={Splash}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name="Slide" 
            component={Slide}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name="WelcomeHome" 
            component={WelcomeHome}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name="Login" 
            component={Login}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name="Register" 
            component={Register}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="User"
            component={User}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
  )
}

export default Router;