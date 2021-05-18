import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

import {colors} from '../../util';
import {logo,backButton} from '../../assets';

const HeaderForm = props => {
  return(
    <View style={{justifyContent:'center', alignItems:'center'}}>
      <TouchableOpacity style={styles.btnBack} 
        onPress = {props.btnBack}>
        <Image style={styles.imgBack} 
          source={backButton}
        />
      </TouchableOpacity>
      <Image style={styles.logo} source={logo} />
      <Image style={styles.imgLogin} source = {props.imgTemplate}/>
    </View>
  );
};

const styles = StyleSheet.create({
    btnBack:{
      position:'absolute',
      top:15,
      left:-70,
    },
    imgBack:{
      width:25,
      height:25,
    },
    logo:{
      width:170,
      height:50,
    },
    imgLogin:{
      width: 100,
      height: 150,
      marginTop: 70,
      marginBottom: 30,
    },
});
export default HeaderForm;