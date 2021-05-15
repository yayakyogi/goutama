import React, {useState, useRef} from 'react';
import {View,Text,Image,FlatList, Animated, TouchableOpacity} from 'react-native';
import SlideItem from './slideItem';
import Slider from './Slider';
import Paginator from './paginator';
import {colors} from '../../util';

const Slide = ({navigation}) => {
    const [currenIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    //const viewConfig = useRef({itemViewVisiblePercentThreshold:50 }).current;
    const viewableItemsChanged = useRef(({ viewableItems }) => {
      setCurrentIndex(viewableItems[0].Index);
    }).current;
    return(
        <View style = {styles.wrapper.slider}>
          <View style={{flex:3}}>
            <FlatList 
              data={Slider} 
              renderItem={({ item }) => <SlideItem item = {item}/>}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              bounces={false}
              keyExtractor={(item) => item.id}
              onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],{
                useNativeDriver: false,
              })}
              scrollEventThrottle={32}
              onViewableItemsChanged={viewableItemsChanged}
              //viewabilityConfig={viewConfig}
              ref={slidesRef}
              />
          </View>

          <Paginator data={Slider} scrollX={scrollX}/>
          <TouchableOpacity style = {styles.button.skip} onPress={() => navigation.replace('WelcomeHome')}>
            <Text style = {styles.text.skip}>Skipp >>></Text>
          </TouchableOpacity>
        </View>
    );
};

const styles = {
  wrapper:{
    slider:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
    },
  },
  text:{
    skip:{
      fontSize:12,
      textAlign: 'center',
      color: colors.white,
    },
  },
  button:{
    skip:{
      alignItems: 'center',
      justifyContent: 'center',
      width: 150,
      height: 30,
      borderRadius:50,
      backgroundColor: colors.primary,
      marginBottom: 30,
      fontWeight: 'bold',
    },
  },
};
export default Slide;