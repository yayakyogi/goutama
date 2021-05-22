import React from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import {logo, imgUser} from '../../../../assets';
import {colors} from '../../../../util';

const Menu = props => {
  return(
    <View>
      <TouchableOpacity style={styles.menu}>
        <Text>{props.menu}</Text>
        <Text>></Text>
      </TouchableOpacity>
    </View>
  )
}

const UserPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.imgLogo}/>
      </View>
      <View style={styles.profile}>
        <Image source={imgUser} style={styles.imguser}/>
        <Text style={styles.namauser}>Yayak Yogi</Text>
        <TouchableOpacity style={styles.btnEditprofil}>
          <Text style={{color:colors.white}}>Edit profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UserPage

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.white,
  },
  header:{
    shadowColor: "#000",
    marginRight:-2,
    marginLeft:-2,
    alignItems:'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    padding:10,
    backgroundColor:'#ffffff',
  },
  imgLogo:{
    width:120,
    height:40,
  },

  profile:{
    height:300,
    alignItems:'center',
    justifyContent:'flex-start',
  },
  imguser:{
    width:200,
    height:200,
    borderRadius:50,
  },
  namauser:{
    fontSize:17,
    fontWeight:'200'
  },
  btnEditprofil:{
    marginTop: 10,
    paddingVertical:10,
    alignItems: 'center',
    width:100,
    borderRadius:5,
    backgroundColor:colors.primary,
    borderWidth:1,
  },
  menu:{
    height:60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:10,
    borderColor:colors.disable,
    borderBottomWidth: 1,
  }
})
