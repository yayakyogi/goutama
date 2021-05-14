import React from 'react';
import {View, ScrollView, Text, Image, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import {colors} from '../../util';

const Register = ({navigation}) => {
  return(
    <ScrollView style = {{backgroundColor: colors.white}}>
      <View style = {styles.wrapper.login}>
      
        {/* Button Kembail  */}
        <TouchableOpacity style={styles.auth.btnBack} 
          onPress = {() => navigation.replace('WelcomeHome')}>
          <Image style={styles.auth.imgBack} 
            source={require('../../assets/img/auth/back-button.png')}
          />
        </TouchableOpacity>

        {/* Images Brand */}
        <Image style={styles.auth.logo} 
          source={require('../../assets/img/brand/logo.png')}
        />

        {/* Images LOGIN */}
        <Image style={styles.auth.imgLogin} 
          source = {require('../../assets/img/auth/img-register.png')}
        />

        {/* Form Input */}
        <SafeAreaView style = {styles.wrapper.groupLogin}>
          <Text style={styles.groupLogin.title}>REGISTER</Text>
          {/* Nama */}
          <Text style={styles.groupLogin.label}>Nama</Text>
          <TextInput 
            style={styles.groupLogin.formInput}
            placeholder="Masukkan nama lengkap anda"
          />
          {/* Email */}
          <Text style={styles.groupLogin.label}>Email</Text>
          <TextInput 
            style={styles.groupLogin.formInput}
            placeholder="Masukkan email aktif anda"
          />
          {/* No Telepon */}
          <Text style={styles.groupLogin.label}>No Telepon</Text>
          <TextInput 
            style={styles.groupLogin.formInput}
            placeholder="Masukkan no handphone anda"
            keyboardType="numeric"
          />
          {/* Password */}
          <Text style={styles.groupLogin.label}>Password</Text>
          <TextInput 
            style={styles.groupLogin.formInput}
            placeholder="Masukkan password anda"
          />
        </SafeAreaView>
        {/* Button Login */}
        <TouchableOpacity style={styles.groupLogin.buttonLogin}>
          <Text style={styles.groupLogin.buttonText}>DAFTAR</Text>
        </TouchableOpacity>

        {/* Footer Copyright */}
        <Text style={styles.text.copyright}>Copyright {'\u00A9'} GoUTama 2021 - All Right Reserved</Text>
      </View>
    </ScrollView>
  );
};

const styles = {
  wrapper:{
    login:{
      alignItems: 'center',
      marginTop: 10,
    },
    groupLogin:{
      paddingVertical:5,
      width: 330,
    },
  },
  groupLogin:{
    title:{
      fontSize: 30,
      fontWeight: 'bold',
      opacity: 0.7,
    },
    label:{
      fontSize: 15,
      marginTop: 10,
      textAlign: 'left',
    },
    formInput:{
      paddingTop: 10,
      paddingBottom: 2,
      borderBottomWidth: 0.5,
    },
    buttonLogin:{
      alignItems: 'center',
      justifyContent: 'center',
      width: 300,
      height: 40,
      borderRadius:50,
      backgroundColor: colors.primary,
      fontWeight: 'bold',
      marginTop: 40,
    },
    buttonText:{
      color: colors.white,
      fontSize:15,
      fontWeight: 'bold',
    },
    lupaPassword:{
      marginTop:10,
      opacity:0.7,
    },
    textLupaPw:{
      color: colors.link,
    }
  },
  auth:{
    btnBack:{
      position:'absolute',
      top:15,
      left:30,
    },
    imgBack:{
      width:25,
      height:25,
    },
    logo:{
      width:170,
      height:50,
      alignItems: 'center',
    },
    imgLogin:{
      width: 100,
      height: 150,
      marginTop: 30,
      marginBottom: 30,
    },
  },
  text:{
    copyright:{
      opacity: 0.5,
      fontSize: 12,
      textAlign: 'center',
      marginTop: 50,
    },
  },
};

export default Register;