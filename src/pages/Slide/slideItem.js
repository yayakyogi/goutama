import React from 'react';
import {View,Text,Image,useWindowDimensions} from 'react-native';

const SlideItem = ({item}) => {
  const {width} = useWindowDimensions();
  return(
      <View style = {[styles.wrapper.slider, {width}]}>
          {/* <Image source = {require('../../assets/img/logo.png')} style={styles.wrapper.logo}/> */}
          <Image source={item.images} style={[styles.wrapper.imgslide, {width,resizeMode:'contain'}]}/>

          <View style={{flex:0.2}}>
            <Text style={styles.text.slideTitle}>{item.title}</Text>
            <Text style={styles.text.slideDeskripsi}>{item.deskripsi}</Text>
          </View>
      </View>
  );
};

const styles = {
  wrapper:{
    slider:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    imgslide:{
      flex: 0.5,
      justifyContent: 'center',
    },
    logo:{
      marginBottom: 20,
      width: 200, 
      height: 70,
    },
  },
  text:{
    slideTitle:{
      fontWeight: 'bold',
      fontSize: 30,
      marginBottom: 10,
      color: '#1E3799',
      textAlign: 'center',
    },
    slideDeskripsi:{
      fontWeight: '300',
      color: '#62656b',
      fontSize: 15,
      textAlign: 'center',
      paddingHorizontal: 64,
    },
  },
};
export default SlideItem;