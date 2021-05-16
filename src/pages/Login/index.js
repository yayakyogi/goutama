import React from 'react';
import {View, ScrollView, Text, Image, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import {colors} from '../../util';
import {logo,imgLogin,backButton} from '../../assets/img';

const Login = ({navigation}) => {
  return(
    <ScrollView style = {{backgroundColor: colors.white}}>
      <View style = {styles.wrapper.login}>
      
        {/* Button Kembail  */}
        <TouchableOpacity style={styles.auth.btnBack} 
          onPress = {() => navigation.replace('WelcomeHome')}>
          <Image style={styles.auth.imgBack} 
            source={backButton}
          />
        </TouchableOpacity>

        {/* Images Brand */}
        <Image style={styles.auth.logo} 
          source={logo}
        />

        {/* Images LOGIN */}
        <Image style={styles.auth.imgLogin} 
          source = {imgLogin}
        />

        {/* Form Input */}
        <SafeAreaView style = {styles.wrapper.groupLogin}>
          <Text style={styles.groupLogin.title}>LOGIN</Text>
          {/* Username */}
          <Text style={styles.groupLogin.label}>Username</Text>
          <TextInput 
            style={styles.groupLogin.formInput}
            placeholder="Masukkan username anda"
          />
          {/* Password */}
          <Text style={styles.groupLogin.label}>Password</Text>
          <TextInput 
            style={styles.groupLogin.formInput}
            placeholder="Masukkan password anda"
          />
        </SafeAreaView>
        {/* Button Login */}
        <TouchableOpacity style={styles.groupLogin.buttonLogin}
          onPress={() => navigation.navigate('User')}>
          <Text style={styles.groupLogin.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        {/* Lupa Password */}
        <Text style={styles.groupLogin.lupaPassword}>Lupa password?</Text>
        <TouchableOpacity>
          <Text style={styles.groupLogin.textLupaPw}>Klik disini</Text>
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
      flex: 1,
    },
    groupLogin:{
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
      marginTop: 15,
      textAlign: 'left',
    },
    formInput:{
      paddingTop: 5,
      paddingBottom: 2,
      borderBottomWidth: 0.5,
    },
    buttonLogin:{
      alignItems: 'center',
      justifyContent: 'center',
      width: 330,
      height: 40,
      borderRadius:10,
      backgroundColor: colors.primary,
      fontWeight: 'bold',
      marginTop: 30,
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
      width: 280,
      height: 180,
      marginTop: 70,
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
export default Login;