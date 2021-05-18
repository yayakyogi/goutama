import React from 'react';
import {View, ScrollView, Text, Image, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import {colors} from '../../../../util';
import {logo,imgRegister,backButton} from '../../../../assets';
import {Copyright} from '../../../../components';

const FormInput = props => {
  return(
    <View>
      <Text style={styles.groupLogin.label}>{props.label}</Text>
      <TextInput 
        style={styles.groupLogin.formInput}
        placeholder = {props.placeholder}
      />
    </View>
  )
}

const Login = ({navigation}) => {
  return(
    <ScrollView showsVerticalScrollIndicator={false} style = {{backgroundColor: colors.white,}}>
      <View style = {styles.wrapper.login}>
        <TouchableOpacity style={styles.auth.btnBack} onPress = {() => navigation.replace('WelcomeHome')}><Image style={styles.auth.imgBack}  source={backButton} /></TouchableOpacity>
        <Image style={styles.auth.logo} source={logo}/>
        <Image style={styles.auth.imgLogin} source = {imgRegister} />
        {/* Form Input */}
        <SafeAreaView style = {styles.wrapper.groupLogin}>
          <Text style={styles.groupLogin.title}>REGISTER</Text>
          <FormInput label = "Nama" placeholder = "Masukan nama anda"/>
          <FormInput label = "Email" placeholder = "Masukan email aktif anda"/>
          <FormInput label = "No Hp" placeholder = "Masukan nomor handphone anda"/>
          <FormInput label = "Password" placeholder = "Masukan password anda"/>
        </SafeAreaView>
        {/* Button Login */}
        <TouchableOpacity style={styles.groupLogin.buttonLogin}onPress={() => navigation.navigate('Dashboard')}><Text style={styles.groupLogin.buttonText}>DAFTAR</Text></TouchableOpacity>
        </View>
    </ScrollView>
  );
};

const styles = {
  wrapper:{
    login:{
      alignItems: 'center',
      paddingTop: 10,
      flex: 1,
      backgroundColor: colors.white,
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
      top:25,
      left:25,
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
export default Login;