import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../util';

const ActionButton = ({title}) => {
  return(
    <View>
      <TouchableOpacity 
        style = {{
          backgroundColor: colors.primary, 
          width: 300, 
          height: 50,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 30,
        }}>
        <Text style = {{color:'#ffffff', fontWeight:'bold',fontSize:16}}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButton;