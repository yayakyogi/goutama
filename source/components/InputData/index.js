import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import {colors} from '../../util';

const InputData = ({
  label,
  placeholder,
  keyboardType,
  secureTextEntry,
  onChangeText,
  namaState,
  value}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={styles.formInput} 
        placeholder = {placeholder} 
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => onChangeText(namaState, text)}
      />
    </>
  )
}

export default InputData

const styles = StyleSheet.create({
  label:{
    fontSize: 13,
    marginTop: 10,
    marginBottom:5,
    textAlign: 'left',
  },
  formInput:{
    paddingVertical: 8,
    paddingHorizontal:10,
    borderWidth: 0.5,
    borderRadius:5,
    borderColor: colors.disable,
    backgroundColor: colors.disable,
  },
})
