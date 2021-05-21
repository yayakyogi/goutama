import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import {logo,imgUser} from '../../../../../assets';

const ItemMessage = props =>{
  return(
    <TouchableOpacity style={styles.itemMessage}>
      <Image source={props.imgMsg} style={styles.imgChat}/>
      <View style={styles.messagesBody}>
        <Text style={styles.pengirim}>{props.title}</Text>
        <Text style={styles.isipesan}>{props.messages}</Text>
      </View>
      <Text style={styles.jam}>{props.time}</Text>
    </TouchableOpacity>
  )
}

const BodyMessage = () => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={logo} style={styles.imgLogo}/>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <ItemMessage
          imgMsg={imgUser}
          title="Yayak Yogi"
          messages="lorem ipsum dolor sit amet sloesdk yayak hdfksdsfjgnsjg"
          time="19.30"
        />
        <ItemMessage
          imgMsg={imgUser}
          title="Yayak Yogi"
          messages="lorem ipsum dolor sit amet sloesdk yayak hdfksdsfjgnsjg"
          time="19.30"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    shadowColor: "#000",
    marginRight:-2,
    marginLeft:-2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    padding:10,
    backgroundColor:'#ffffff',
  },
  imgLogo:{
    width:120,
    height:30,
  },
  itemMessage:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems: 'center',
    height:70,
    paddingHorizontal:10,
    borderBottomWidth:2,
    borderColor: '#f1f2f6',
  },
  imgChat:{
    width:50,
    height:50,
    borderRadius:50,
    marginRight:10,
  },
  pengirim:{
    fontWeight: 'bold',
    fontSize: 15,
  },
  messagesBody:{
    flex:1,
  },
  isipesan:{
    fontWeight: '100',
    fontSize:12,
  },
  jam:{
    position: 'absolute',
    top: 10,
    right:10,
    fontSize:12,
  },
})

export default BodyMessage