import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; 
import Header from './dashboard/header';
import {colors} from '../../util';
import InformasiMenu from './dashboard/informasiMenu';
import {
  imgNotifikasi,imgUser,imgWallet,imgTambahSaldo,imgHistory,imgGiftBox,imgGoRide,imgDelivery,imgPayment,imgTopUp,imgTagihan,imgSimpanPinjam,imgBtnHome,imgBtnMsg,imgBtnUser,imgPromo1,
} 
from '../../assets/img';

const Klik = ({navigation}) => {
  return(
    <TouchableOpacity onPress={() => navigation.navigate('TambahSaldo')}>
            <Text>Klik</Text>
          </TouchableOpacity>
  )
}
const User = () => {
  return(
      <View style={styles.dashboard}>
      <ScrollView>
        <View style = {styles.wrapper}>
          <Header/>
          <View style={{alignItems:'center'}}>
            <InformasiMenu/>
          </View>
          <View style = {{backgroundColor:colors.disable, height:10,marginTop:30}}/>
          {/* Menu utama */}
            <Text style = {{fontSize: 15, fontWeight: 'bold', marginLeft: 20,marginTop:10,}}>Menu Utama</Text>
            <View style = {styles.menu}>
                {/* Go Ride */}
                <View style = {styles.menuItem}>
                  <Image source = {imgGoRide} style = {styles.imgMenuItem}/>
                  <Text style = {styles.menuTitle}>Go-Ride</Text>
                </View>
                {/* Go Delivery */}
                <View style = {styles.menuItem}>
                  <Image source = {imgDelivery} style = {styles.imgMenuItem}/>
                  <Text style = {styles.menuTitle}>Delivery</Text>
                </View>
                {/* Go Parment */}
                <View style = {styles.menuItem}>
                  <Image source = {imgPayment} style = {styles.imgMenuItem}/>
                  <Text style = {styles.menuTitle}>Payment</Text>
                </View>
                {/* Isi Ulang */}
                <View style = {styles.menuItem}>
                  <Image source = {imgTopUp} style = {styles.imgMenuItem}/>
                  <Text style = {styles.menuTitle}>Isi Ulang</Text>
                </View>
                {/* Tagihan dan Pascabayar */}
                <View style = {styles.menuItem}>
                  <Image source = {imgTagihan} style = {styles.imgMenuItem}/>
                  <Text style = {styles.menuTitle}>Tagihan dan Pascabayar</Text>
                </View>
                {/* Simpan Pinjam */}
                <View style = {styles.menuItem}>
                  <Image source = {imgSimpanPinjam} style = {styles.imgMenuItem}/>
                  <Text style = {styles.menuTitle}>E-Simpan Pinjam</Text>
                </View>
            </View>
            <View style = {{backgroundColor:colors.disable, height:10,marginTop:10}}/>
            {/* Promo Menu */}
            <View style = {styles.promoTitle}>
                <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Yang menarik di GoUTama</Text>
                <Text style = {{fontSize: 10, fontWeight: '200', color: colors.link}}>Lihat lainnya >></Text>
              </View>
            <ScrollView horizontal style = {{flexDirection: 'row', marginLeft: 20,}} showsHorizontalScrollIndicator={false}>
            <View style = {styles.menuPromo}>
                <Image source = {imgPromo1} style = {styles.imgPromo}/>
                <View style = {styles.captionPromo}>
                  <Text style = {styles.capsTitle}>
                    Banyak Pilihan Cara Transaksi Pembayaran
                  </Text>
                  <Text style = {styles.capsSubTitle}>
                    Semua bisa dilakukan dengan <Text style = {{fontWeight: 'bold'}}>GoUTama</Text>
                  </Text>
                  <View style = {styles.capsBtn}>
                    <Text style = {{fontSize: 10, fontWeight: 'bold', color: colors.white}}>Coba Sekarang</Text>
                  </View>
              </View>
            </View>
              <View style = {styles.menuPromo}>
                <Image source = {imgPromo1} style = {styles.imgPromo}/>
                <View style = {styles.captionPromo}>
                  <Text style = {styles.capsTitle}>
                    Banyak Pilihan Cara Transaksi Pembayaran
                  </Text>
                  <Text style = {styles.capsSubTitle}>
                    Semua bisa dilakukan dengan <Text style = {{fontWeight: 'bold'}}>GoUTama</Text>
                  </Text>
                  <View style = {styles.capsBtn}>
                    <Text style = {{fontSize: 10, fontWeight: 'bold', color: colors.white}}>Coba Sekarang</Text>
                  </View>
              </View>
              </View>
            </ScrollView>

        </View>
        </ScrollView>
        {/* Bottom Navigation */}
        <View style = {styles.bottomNav}>
          <View style = {styles.btnItem}>
              <Image source = {imgBtnHome} style = {styles.btnImg}/>
              <Text style={{marginTop:4}}>Home</Text>
          </View>
          <View style = {styles.btnItem}>
              <Image source = {imgBtnMsg} style = {styles.btnImg}/>
              <Text style={{marginTop:4}}>Pesan</Text>
          </View>
          <View style = {styles.btnItem}>
              <Image source = {imgBtnUser} style = {styles.btnImg}/>
              <Text style={{marginTop:4}}>User</Text>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  dashboard:{
    backgroundColor: 'blue',
    flex: 1,
  },
  wrapper:{
    flex: 1,
    backgroundColor: colors.white,
  },
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

  menu:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 25,
    paddingHorizontal: 20,
    
  },
  menuItem:{
    width: 95,
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 30,
  },
  imgMenuItem:{
    width: 50,
    height: 50,
  },
  menuTitle:{
    fontSize: 12,
  },

  menuPromo:{
    backgroundColor: colors.promo,
    marginTop: 10,
    marginBottom: 50,
    marginRight: 10,
    width: 325,
    height: 160,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  promoTitle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  imgPromo:{
    width: 120,
    height: 110,
    marginRight: 10,
  },
  captionPromo:{
    width: 160,
  },
  capsTitle:{
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.white,
  },
  capsSubTitle:{
    fontSize: 12,
    fontWeight: '100',
    color: colors.white,
    marginVertical: 10,
  },
  capsBtn:{
    backgroundColor: colors.primary,
    width: 105,
    height: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default User;