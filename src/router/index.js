import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 
import {Splash,Slide,WelcomeHome,Login,Register,} from '../pages';
const Stack = createStackNavigator();

const Router = () => {
  return(
    <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash}
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
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
    </Stack.Navigator>
  )
}

export default Router;