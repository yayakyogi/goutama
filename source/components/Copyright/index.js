import React from 'react';
import {Text} from 'react-native';

const Copyright = () => {
  return(
    <Text 
      style={{ 
        marginTop: 50,
        opacity: 0.5,
        fontSize: 12,}}>
          Copyright {'\u00A9'} GoUTama 2021 - All Right Reserved
    </Text>
  )
}

export default Copyright;