import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {imgBtnHome,imgBtnMsg,imgBtnUser} from '../../../../../assets';
import {colors} from '../../../../../util';

const BottomMenu = props => {
  const counts = props.counting;
  return(
    <View style = {styles.btnItem}>
      <Image source = {props.img} style = {styles.btnImg}/>
      <Text style={{marginTop:4}}>{props.title}</Text>
      <Text style={styles.count}>{props.counting}</Text>
    </View>
  )
}

const BottomNav = () => {
  return(
    <View style = {styles.bottomNav}>
      <BottomMenu img = {imgBtnHome} title = "Home" counting = "0"/>
      <BottomMenu img = {imgBtnMsg} title = "Pesan" counting = "2"/>
      <BottomMenu img = {imgBtnUser} title = "User" counting = "2"/>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomNav:{
    height: 60,
    width: '100%',
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  btnItem:{
    width: 50,
    alignItems: 'center',
  },
  btnImg:{
    width: 20,
    height: 20,
  },
  count:{
    position: 'absolute',
    top:-10,
    right:0,
    color: 'white',
    backgroundColor: 'red',
    height:15,width:15,
    borderRadius:5,
    textAlign: 'center',
    fontSize:10,
  },
})

export default BottomNav;