import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../../../util';
import {imgWallet, imgTambahSaldo, imgHistory, imgGiftBox} from '../../../assets/img';

const TotalSaldo = () => {
  return(
    <View style = {styles.totSaldo}>
      <Image source = {imgWallet} style={styles.imgwallet}/>
      <View style = {styles.saldo}>
        <Text style={{fontSize:15, fontWeight: '200', color:colors.white}}>Saldo kamu</Text>
        <Text style={{fontSize:20, fontWeight: 'bold', color:colors.white}}>2.000.000</Text>
      </View>
    </View>
  )
}

const ImageButton = props => {
  return(
    <View>
        <Image source = {props.image} style = {styles.imgButton}/>
        <Text style = {styles.titleBtn}>{props.title}</Text>
    </View>
  )
}

const MenuButton = ({navigation}) =>{
  return(
    <View style = {styles.menuBtn}>
      
      {/* Tombol tambah saldo */}
      <View style = {styles.menuBtnItem}>
        <ImageButton 
          page = 'WelcomeHome'
          image = {imgTambahSaldo}
          title = 'Tambah Saldo'
        />
      </View>
         
      <View style = {styles.menuBtnItem}>
        <ImageButton 
          page = 'WelcomeHome'
          image = {imgHistory}
          title = 'History'
        />
      </View>

      <View style = {styles.menuBtnItem}>
        <ImageButton 
          page = 'WelcomeHome'
          image = {imgGiftBox}
          title = 'Hadiah'
        />
      </View>

    </View>
  )
} 

const InformasiMenu = ({navigation}) => {
  return(
    <View style={styles.bodyMenu}>
      <TotalSaldo/>
      <MenuButton/>
      <Text style={{position: 'absolute',top:10,right:10,fontSize:12,color:colors.white}}>Poin kamu : 100 Point</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyMenu:{
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 120,
    width: 350,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 30,
  },
  totSaldo:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  menuBtn:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 150,
  },
  titleBtn:{
    fontSize: 7,
    color: colors.white,
    width: 30,
    textAlign: 'center',
  },
  imgwallet:{
    width: 37,
    height: 41,
    marginRight: 10,
  },
  imgButton:{
    width: 30,
    height: 30,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  menuBtnItem:{
    flexDirection: 'row',
    marginTop: 10,
  }
})

export default InformasiMenu;