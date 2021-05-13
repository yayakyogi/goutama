import React, {useEffect} from 'react';
import {View , Text, Image} from 'react-native';

const Splash =  ({navigation}) => {
  useEffect(() => {
      setTimeout(() => {
          navigation.replace('Slide');    
      }, 2000);
  });
  return(
      <View style = {styles.SplashScreen}>
          <Image source = {require('../../assets/img/brand.png')} style = {styles.imgSplash}/>
      </View>
  );
};

const styles = {
  SplashScreen:{
    backgroundColor: '#1E3799',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgSplash:{
    width: 300,
    height: 100,
    justifyContent:'center', 
  }
};
export default Splash;