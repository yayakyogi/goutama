import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../../../../../util';
import {imgWallet, imgTambahSaldo, imgHistory, imgGiftBox} from '../../../../../assets';

const TotalSaldo = () => {
  return(
    <View style = {styles.totSaldo}>
      <Image source = {imgWallet} style={styles.imgwallet}/>
      <View style = {styles.saldo}>
        <Text style={{fontSize:15, fontWeight: '200', color:colors.white}}>Saldo kamu</Text>
        <Text style={{fontSize:18, fontWeight: 'bold', color:colors.white}}>10.000.000</Text>
      </View>
    </View>
  )
}

const ImageButton = props => {
  return(
    <TouchableOpacity style = {styles.menuBtnItem}>
        <Image source = {props.image} style = {styles.imgButton}/>
        <Text style = {styles.titleBtn}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const MenuButton = ({navigation}) =>{
  return(
    <View style = {styles.menuBtn}>
      
      {/* Tombol tambah saldo */}
        <ImageButton 
          page = 'WelcomeHome'
          image = {imgTambahSaldo}
          title = 'Tambah Saldo'
        />
        <ImageButton 
          page = 'WelcomeHome'
          image = {imgHistory}
          title = 'History'
        />
        <ImageButton 
          page = 'WelcomeHome'
          image = {imgGiftBox}
          title = 'Hadiah'
        />

    </View>
  )
} 

const InformationMenu = ({navigation}) => {
  return(
    <View>
      <View style = {styles.menuAbsolute}>
        <Text style={{fontSize:12,color:colors.white,fontWeight: 'bold'}}>Selamat datang, Yayak</Text>
        <Text style={{fontSize:10,color:colors.white}}>Poin kamu : 100 Point</Text>
      </View>
      <View style={styles.bodyMenu}>
        <TotalSaldo/>
        <MenuButton/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyMenu:{
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 100,
    width:'100%',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
  totSaldo:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  menuBtn:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex:1,
  },
  titleBtn:{
    fontSize: 7,
    color: colors.white,
    textAlign: 'center',
  },
  imgwallet:{
    width: 45,
    height: 47,
    marginRight: 10,
  },
  imgButton:{
    width: 30,
    height: 30,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  menuBtnItem:{
    justifyContent: 'center',alignItems: 'center'
  },
  menuAbsolute:{
    height:30,
    backgroundColor:'#40739e',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal:10,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    marginTop:5,
  }
})

export default InformationMenu;