import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {colors} from '../../../../../util';
import {imgPromo1, imgPromo2} from '../../../../../assets';

const MenuPromo = props => {
  return(
    <View style = {{
        backgroundColor:props.background,
        borderRadius: 5,
        marginBottom: 20, 
        marginRight: 10,
      }}>
      <View style = {styles.menuPromo}>
        <Image source = {props.img} style = {styles.imgPromo}/>
        <View style = {styles.captionPromo}>
          <Text style = {styles.capsTitle}>
            {props.titlePromo}
          </Text>
          <Text style = {styles.capsSubTitle}>
            {props.subTitlePromo}
            <Text style = {{fontWeight: 'bold'}}>
              {props.brand}
            </Text>
          </Text>
            <TouchableOpacity style = {{
                  backgroundColor:props.bgBtn, width: 105,
                  height: 20,
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
              }}>
              <Text style = {{fontSize: 10, fontWeight: 'bold', color: colors.white}}>Coba Sekarang</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const Promomenu = props=> {
  return(
    <View>
      <View style = {styles.promoTitle}>
        <Text style = {{fontSize: 15, fontWeight: 'bold',marginBottom: 10}}>Fitur menarik dari GoUTama</Text>
        {/* <Text style = {{fontSize: 10, fontWeight: '200', color: colors.link}}>Lihat lainnya >></Text> */}
      </View>
      <ScrollView horizontal style = {{flexDirection: 'row', marginLeft: 20,}} showsHorizontalScrollIndicator={false}>
        <MenuPromo 
          background = {colors.promo2}
          img = {imgPromo2} 
          titlePromo = "Banyak Pilihan Cara Transaksi Pembayaran"
          subTitlePromo = "Semua bisa dilakukan dengan"
          brand = "GoUTama"
          bgBtn = {colors.success}
        />
        <MenuPromo 
          background = {colors.promo}
          img = {imgPromo1} 
          titlePromo = "Lakukan semua aktivitas melalui smartphone"
          subTitlePromo = "Semua bisa dilakukan dengan"
          brand = "GoUTama"
          bgBtn = {colors.primary}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  menuPromo:{
    marginRight: 10,
    width: 290,
    height: 150,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  promoTitle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  imgPromo:{
    flex:0.4,
    height: 110,
    marginRight: 10,
  },
  captionPromo:{
    flex:0.6,
    marginLeft:10,
  },
  capsTitle:{
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
  },
  capsSubTitle:{
    fontSize: 11,
    fontWeight: '100',
    color: colors.white,
    marginVertical: 10,
  },
});

export default Promomenu;