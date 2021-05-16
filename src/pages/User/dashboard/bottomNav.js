import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {imgBtnHome,imgBtnMsg,imgBtnUser} from '../../../assets/img';
import {colors} from '../../../util';

const BottomMenu = props => {
  return(
    <View style = {styles.btnItem}>
      <Image source = {props.img} style = {styles.btnImg}/>
      <Text style={{marginTop:4}}>{props.title}</Text>
    </View>
  )
}

const BottomNav = () => {
  return(
    <View style = {styles.bottomNav}>
      <BottomMenu img = {imgBtnHome} title = "Home"/>
      <BottomMenu img = {imgBtnMsg} title = "Pesan"/>
      <BottomMenu img = {imgBtnUser} title = "User"/>
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
})

export default BottomNav;