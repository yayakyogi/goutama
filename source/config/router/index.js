import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 
import {SplashScreen, Slide, WelcomeHome, Login, Register,ResetPassword,Dashboard} from '../../container/pages';

const Stack = createStackNavigator();

const Router = () => {
  return(
    <Stack.Navigator>
        <Stack.Screen 
            name="SplashScreen" component={SplashScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name="Slide" component={Slide}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name="WelcomeHome" component={WelcomeHome}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name="Login" component={Login}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name="Register" component={Register}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name="ResetPassword" component={ResetPassword}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name="Dashboard" component={Dashboard}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
  )
}

export default Router;