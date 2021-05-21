import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  imgNotifikasi,imgUser,imgWallet,imgTambahSaldo,imgHistory,imgGiftBox,imgGoRide,imgDelivery,imgPayment,imgTopUp,imgTagihan,imgSimpanPinjam,imgBtnHome,imgBtnMsg,imgBtnUser,imgPromo1,
} 
from '../../../../../assets';

const MenuItem = props => {
  return(
      <TouchableOpacity style = {styles.menuItem}>
        <Image source = {props.img} style = {styles.imgMenuItem}/>
        <Text style = {styles.menuTitle}>{props.title}</Text>
      </TouchableOpacity>
  )
}

const MainMenu = () => {
  return(
    <View>
      <Text style = {{fontSize: 15, fontWeight: 'bold', marginLeft: 20,marginTop:10,}}>Menu Utama</Text>
      <View style = {{flexDirection: 'row', justifyContent: 'space-around',  marginTop: 25}}>
        <MenuItem img = {imgGoRide} title = "Go-Ride"/>
        <MenuItem img = {imgDelivery} title = "Delivery"/>
        <MenuItem img = {imgPayment} title = "Payment"/>
      </View>
      <View style = {{flexDirection:'row',justifyContent: 'space-around'}}>
        <MenuItem img = {imgTopUp} title = "Isi Ulang"/>
        <MenuItem img = {imgTagihan} title = "Tagihan dan Pascabayar"/>
        <MenuItem img = {imgSimpanPinjam} title = "E-Simpan Pinjam"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menu:{
    marginTop: 25,
  },
  menuItem:{
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 30,
    flex: 1,
  },
  imgMenuItem:{
    width: 50,
    height: 50,
  },
  menuTitle:{
    fontSize: 12,
  },
})

export default MainMenu;