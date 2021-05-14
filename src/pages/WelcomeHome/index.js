import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../util';


const WelcomeHome = ({navigation}) => {
  return(
    <View style = {styles.wrapper.page}>
      <Image source = {require('../../assets/img/brand.png')} style = {styles.wrapper.brand}/>
      <Text style = {styles.text.welcome}>Selamat Datang di</Text>
      <Image source = {require('../../assets/img/logo.png')} style={styles.wrapper.logo}/>
      <TouchableOpacity style={styles.button.navigate} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.button.textNavigate}>Login</Text>
      </TouchableOpacity>
      <View style = {styles.text.or}>
        <View style = {styles.text.line}></View>
        <Text style={styles.text.atau}>Atau</Text>
        <View style = {styles.text.line}></View>
      </View>
      <TouchableOpacity style={styles.button.navigate} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.button.textNavigate}>Daftar</Text>
      </TouchableOpacity>
      <Text style={styles.text.copyright}>Copyright {'\u00A9'} GoUTama 2021 - All Right Reserved</Text>
    </View>
  );
};

const styles = {
  wrapper: {
    page:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: colors.white,
      },
    brand:{
      width: 300,
      height: 100,
      justifyContent:'center', 
    },
    logo:{
      marginBottom: 50,
      marginTop: -10,
      width: 300, 
      height: 100,
    },
  },
  text:{
    welcome:{
      fontSize:18, 
      color: colors.black, 
      opacity: 0.5,
      marginTop:70,
    },
    or:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    line:{
      height: 1,
      width: 100,
      backgroundColor: colors.black,
      opacity: 0.5,
    },
    atau:{
      marginVertical: 10,
      marginHorizontal: 10,
    },
    copyright:{
      position: 'absolute',
      bottom: 20,
      opacity: 0.5,
      fontSize: 12,
    }
  },
  button:{
    navigate:{
      alignItems: 'center',
      justifyContent: 'center',
      width: 270,
      height: 40,
      borderRadius:50,
      backgroundColor: colors.primary,
      fontWeight: 'bold',
    },
    textNavigate:{
      color: colors.white,
      fontSize:15,
      fontWeight: 'bold',
    },
  },
};

export default WelcomeHome;