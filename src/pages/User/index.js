import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, StyleSheet,Button} from 'react-native';
import {colors} from '../../util';

import Header from './dashboard/header';
import InformasiMenu from './dashboard/informasiMenu';
import MenuUtama from './dashboard/menuutama';
import Promo from './dashboard/promo';
import BottomNav from './dashboard/bottomNav';

const Dashboard = ({navigation}) => {
  return(
      <View style={styles.dashboard}>
        <ScrollView>
          <View style = {styles.wrapper}>
            <Header/>
            <View style={{alignItems:'center'}}><InformasiMenu/></View>
            <View style = {{backgroundColor:colors.disable, height:10,marginTop:30}}/>
            <MenuUtama/>
            <View style = {{backgroundColor:colors.disable, height:10,marginTop:10}}/>
            <Promo 
              login={() => navigation.navigate('TambahSaldo')}
              register={() => navigation.navigate('Register')}
            />
          </View>
        </ScrollView>
        <BottomNav/>
     </View>
  )
}

const styles = StyleSheet.create({
  dashboard:{
    flex: 1,
  },
  wrapper:{
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Dashboard;