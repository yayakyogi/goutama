import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import {colors} from '../../../../util';
import {logo, imgRegister, backButton} from '../../../../assets';
import {InputData} from '../../../../components';
import FIREBASE from '../../../../config/firebase';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      loading:false
    };
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    if(this.state.email && this.state.password && this.state.passwordConfirm)
    {
      if(this.state.password == this.state.passwordConfirm)
      {
        FIREBASE.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(() => {
           Alert.alert('Sukses','Berhasil menyimpan data');
          this.props.navigation.replace('Login');
        })
        .catch((error) => {
          console.log("Error : ",error)
        })
      }
      else{
        Alert.alert('Peringatan','Password tidak sama silahkan ulangi lagi');
      }
    }
    else{
      Alert.alert("Peringatan","Semua kolom wajib untuk diisi");
    }
  };

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
          <Image style={styles.imgRegister} source={imgRegister} />
          <SafeAreaView style={styles.groupLogin}>
            <Text style={styles.title}>REGISTER</Text>
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
            <InputData
              label="Kofirmasi Password"
              placeholder="Ulangi password anda"
              onChangeText={this.onChangeText}
              value={this.state.passwordConfirm}
              namaState="passwordConfirm"
              secureTextEntry={true}
            />
          </SafeAreaView>
          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => this.onSubmit()}>
            <Text style={styles.buttonText}>DAFTAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 30,
    flex: 1,
    backgroundColor: colors.white,
  },
  groupLogin: {
    width: 330,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    opacity: 0.7,
    textAlign: 'left',
  },
  label: {
    fontSize: 13,
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'left',
  },
  formInput: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: colors.disable,
    backgroundColor: colors.disable,
  },
  buttonRegister: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 330,
    height: 45,
    borderRadius: 10,
    backgroundColor: colors.primary,
    fontWeight: 'bold',
    marginTop: 30,
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  lupaPassword: {
    marginTop: 10,
    opacity: 0.7,
  },
  textLupaPw: {
    color: colors.link,
  },

  btnBack: {
    position: 'absolute',
    top: 25,
    left: 25,
  },
  imgBack: {
    width: 25,
    height: 25,
  },
  logo: {
    width: 170,
    height: 50,
    alignItems: 'center',
  },
  imgRegister: {
    width: 150,
    height: 170,
    marginVertical: 10,
  },
});