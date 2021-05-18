import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../../util';

const ButtonWelcomeHome = props => {
  return(
    <View>
      <TouchableOpacity style = {styles.btnNavigate} onPress = {props.pages}>
        <Text style = {styles.textNavigate}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
   btnNavigate:{
      alignItems: 'center',
      justifyContent: 'center',
      width: 270,
      height: 40,
      borderRadius:50,
      backgroundColor: colors.primary,
      fontWeight: 'bold',
    },
    textNavigate:{
      color: colors.white,
      fontSize:16,
      fontWeight: 'bold',
    },
});

export default ButtonWelcomeHome;