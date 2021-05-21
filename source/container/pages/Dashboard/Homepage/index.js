import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, StyleSheet,Button} from 'react-native';
import {colors} from '../../../../util';
import HeaderDashboard from './HeaderDashboard';
import BottomNav from './BottomNavigation';
import InformationMenu from './Informationmenu';
import MainMenu from './Mainmenu';
import Promomenu from './Promomenu';

const Line = () => {
  return(
    <View style = {{backgroundColor:colors.disable, height:10,marginTop:10}}/>
  )
}
const Homepage = ({navigation}) => {
  return(
      <View style={styles.dashboard}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style = {styles.wrapper}>
            <HeaderDashboard 
              link = {() => navigation.navigate('Homepage')}
              link = {() => navigation.navigate('Notifikasi')}
              link = {() => navigation.navigate('Profil')}
            />
            <View style={{alignItems:'center',paddingHorizontal:10}}><InformationMenu/></View>
            <Line/>
            <MainMenu/>
            <Line/>
            <Promomenu
              login={() => navigation.navigate('TambahSaldo')}
              register={() => navigation.navigate('Register')}
            />
          </View>
        </ScrollView>
        {/* <BottomNav/> */}
     </View>
  )
}

const styles = StyleSheet.create({
  dashboard:{
    flex: 1,
    paddingHorizontal:2,
  },
  wrapper:{
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Homepage;