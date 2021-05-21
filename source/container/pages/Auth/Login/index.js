import React from 'react';
import {View, ScrollView, Text, Image, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import {colors} from '../../../../util';
import {logo,imgLogin,backButton} from '../../../../assets';
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

const Btn = props => {
  return(
    <View>
      <TouchableOpacity style={props.btnStyles} onPress={props.Navigation}>
          <Text style={props.textStyles}>{props.textBtn}</Text>
      </TouchableOpacity>
    </View>
  )
}

const Img = props => {
  return(
    <Image style={props.imgStyles}  source={props.imgSource} />
  )
}
const Login = ({navigation}) => {
  return(
      <ScrollView showsVertitalScrollIndicator={false} style = {{backgroundColor:colors.white}}>
        <View style = {styles.wrapper.login}>
          <TouchableOpacity style={styles.auth.btnBack} onPress = {() => navigation.replace('WelcomeHome')}><Img imgStyles={styles.auth.imgBack} imgSource={backButton}/></TouchableOpacity>
          <Img imgStyles={styles.auth.logo} imgSource={logo}/>
          <Img imgStyles={styles.auth.imgLogin} imgSource={imgLogin}/>
          <SafeAreaView style = {styles.wrapper.groupLogin}>
            <Text style={styles.groupLogin.title}>LOGIN</Text>
            <FormInput label = "Username" placeholder = "Masukan username anda"/>
            <FormInput label = "Password" placeholder = "Masukan password anda"/>
          </SafeAreaView>
          <Btn btnStyles={styles.groupLogin.buttonLogin} Navigation={() => navigation.navigate('Homepage')} textStyles={styles.groupLogin.buttonText} textBtn="LOGIN"/>
          <Text style={styles.groupLogin.lupaPassword}>Lupa password?</Text>
          <Btn btnStyles={styles.groupLogin.lupaPassword} Navigation={() => navigation.navigate('ResetPassword')} textStyles={styles.groupLogin.textLupaPw} textBtn="Klik disini"/>
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
      fontSize: 25,
      fontWeight: 'bold',
      opacity: 0.7,
    },
    label:{
      fontSize: 13,
      marginTop: 10,
      marginBottom:5,
      textAlign: 'left',
    },
    formInput:{
      paddingVertical: 5,
      paddingHorizontal:10,
      borderWidth: 0.5,
      borderRadius:5,
      borderColor: colors.disable,
      backgroundColor: colors.disable,
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
      marginVertical: 30,
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