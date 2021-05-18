import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, StyleSheet,Button} from 'react-native';
import {colors} from '../../../util';
import {Header, BottomNav,InformationMenu,MainMenu,Promomenu} from './Homepage';

const Line = () => {
  return(
    <View style = {{backgroundColor:colors.disable, height:10,marginTop:30}}/>
  )
}
const Dashboard = ({navigation}) => {
  return(
      <View style={styles.dashboard}>
        <ScrollView>
          <View style = {styles.wrapper}>
            <Header link = {() => navigation.navigate('Dashboard')}/>
            <View style={{alignItems:'center'}}><InformationMenu/></View>
            <Line/>
            <MainMenu/>
            <Line/>
            <Promomenu
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