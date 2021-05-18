import React, {useEffect} from 'react';
import {View , Text, Image, StyleSheet} from 'react-native';
import {brand} from '../../../../assets';
import {colors} from '../../../../util';

const SplashScreen =  ({navigation}) => {
  useEffect(() => {
      setTimeout(() => {
          navigation.replace('Slide');    
      }, 2000);
  });
  return(
      <View style = {styles.SplashScreen}>
          <Image source = {brand} style = {styles.imgSplash}/>
      </View>
  );
};

const styles = StyleSheet.create({
  SplashScreen:{
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgSplash:{
    width: 300,
    height: 100,
    justifyContent:'center', 
  },
});
export default SplashScreen;