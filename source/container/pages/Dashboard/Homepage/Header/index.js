import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {logo, imgNotifikasi, imgUser} from '../../../../../assets';

const Header = props => {
  return(
    <View style = {styles.wrapper.header}>
    <TouchableOpacity onPress={props.link}>
      <Image source = {logo} style = {styles.wrapper.logo}/>
    </TouchableOpacity>
      <View style={styles.wrapper.headerMenu}>
        <TouchableOpacity>
          <Image 
            style = {styles.wrapper.imgNotifikasi}
            source = {imgNotifikasi}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style = {styles.wrapper.imgUser}
            source = {imgUser}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = {
  wrapper:{
    header:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 50,
      marginVertical: 15,
      marginHorizontal: 10,
    },
    logo:{
      width: 150,
      height: 30,
    },
    headerMenu:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '20%',
      marginRight: 10,
    },
    imgNotifikasi:{
      width: 27,
      height: 21,
      marginRight: 15,
    },
    imgUser:{
      width: 50,
      height: 50,
      borderRadius: 50 / 2,
    },
  },
};

export default Header;