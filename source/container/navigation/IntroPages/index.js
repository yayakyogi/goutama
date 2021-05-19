import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 
import {SplashScreen, Slide, WelcomeHome, Login, Register,ResetPassword} from '../../pages';

const Stack = createStackNavigator();
const IntroPages = () => {
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
        </Stack.Navigator>
    )
}

export default IntroPages;