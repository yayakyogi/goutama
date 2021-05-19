import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dashboard,UserPage,MessagePage} from '../../pages';
import {Iconhome,Iconmessage,Iconaccount,} from '../../../assets';
import {View, Text, Image, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();
const ButtomTabNavigator = () => {
  return(
    <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style:{
            height:60,
            textAlign: 'center',
          }
        }}
      >
      <Tab.Screen 
        name="Beranda" 
        component={Dashboard}
        options={{
          tabBarIcon:({focused})=>(
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image source={Iconhome} 
                  resizeMode='contain' 
                  style={{
                    width:25,
                    height:25,
                    tintColor: focused ? '#1E3799' : '#707070',
                  }}
                />
              <Text style={{color: focused ? '#1E3799' : '#707070',fontSize:10}}>Beranda</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="Pesan" 
        component={MessagePage}
        options={{
          tabBarIcon:({focused})=>(
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image source={Iconmessage} 
                  resizeMode='contain' 
                  style={{
                    width:25,
                    height:25,
                    tintColor: focused ? '#1E3799' : '#707070',
                  }}
                />
              <Text style={{color: focused ? '#1E3799' : '#707070',fontSize:10}}>Pesan</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="Akun" 
        component={UserPage}
        options={{
          tabBarIcon:({focused})=>(
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image source={Iconaccount} 
                  resizeMode='contain' 
                  style={{
                    width:25,
                    height:25,
                    marginLeft:5,
                    tintColor: focused ? '#1E3799' : '#707070',
                  }}
                />
              <Text style={{color: focused ? '#1E3799' : '#707070',fontSize:10}}>Akun</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default ButtomTabNavigator;