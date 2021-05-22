import React, {Component} from 'react';
import {View, ScrollView, Text, Image, TextInput, SafeAreaView, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {colors} from '../../../../util';
import {logo,imgLogin,backButton} from '../../../../assets';
import {InputData} from '../../../../components';
import FIREBASE from '../../../../config/firebase';

export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email:'',
       password:''
    }
  }
  
  onChangeText = (namaState,value) => {
    this.setState({
      [namaState] : value
    })
  }
  onSubmit = () =>{
    var user = FIREBASE.auth().currentUser;
    if (user)
    {
      this.props.navigation.replace('Homepage');
    } 
    else 
    { // No user is signed in.
      if(this.state.email && this.state.password)
      {
        const{email,password} = this.state;
        FIREBASE.auth().signInWithEmailAndPassword(email,password)
        .then(() => {
            this.props.navigation.replace('Homepage');
          })
        .catch((error) => {
          Alert.alert('Error'+error);
        })
      }
      else{
        Alert.alert("Peringatan","Semua kolom wajib untuk diisi");
      }
    }
}

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: colors.white}}>
        <View style={styles.login}>
          <TouchableOpacity
            style={styles.btnBack}
            onPress={() => this.props.navigation.replace('WelcomeHome')}>
            <Image style={styles.imgBack} source={backButton} />
          </TouchableOpacity>
          <Image style={styles.logo} source={logo} />
          <Image style={styles.imgLogin} source={imgLogin} />
          <SafeAreaView style={styles.groupLogin}>
            <Text style={styles.title}>LOGIN</Text>
            <InputData
              label="Email"
              placeholder="Masukkan email anda"
              onChangeText={this.onChangeText}
              value={this.state.email}
              namaState="email"
            />
            <InputData
              label="Password"
              placeholder="Masukkan password anda"
              onChangeText={this.onChangeText}
              value={this.state.password}
              namaState="password"
              secureTextEntry={true}
            />
          </SafeAreaView>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => this.onSubmit()}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  login:{
    alignItems: 'center',
    paddingTop: 10,
    flex: 1,
    backgroundColor: colors.white,
  },
  groupLogin:{
    width: 330,
  },
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
    paddingVertical: 8,
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
    height: 45,
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
  },
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
  copyright:{
    opacity: 0.5,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 50,
  },
})