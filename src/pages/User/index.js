import React from 'react';
import {Text, ScrollView, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Header from './dashboard/header';
import {colors} from '../../util';

const User = () => {
  return(
    <ScrollView style={styles.dashboard}>
      <Header/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  dashboard:{
    backgroundColor: colors.white,
  }
});

export default User;