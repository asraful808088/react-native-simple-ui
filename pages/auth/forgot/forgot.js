import React, {useLayoutEffect, useState,} from 'react';
import {Animated, Dimensions, Image, Pressable, View} from 'react-native';
import arrow from '../../../assets/icons/arrow.png';
import CustomTextInput from '../../../components/textinput/input';
import forGotIcon from '../../../assets/logo/forgot.png'
const width = Dimensions.get('window').width;
function Forgot() {
  const [slideAnimation] = useState(new Animated.Value(0));
  const [stap, setStap] = useState(0);
  useLayoutEffect(() => {
    Animated.spring(slideAnimation, {
      toValue: stap * width,
      useNativeDriver: true,
    }).start();
  }, [stap]);
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <View
        style={{
          height: 80,
          width: 80,
        }}>
          <Image source={forGotIcon} style={{
            height:80,
            width:80
          }}/>
        </View>
      <Animated.View
        style={{
          position: 'relative',
          width: '300%',
          height: '55%',
          display: 'flex',
          flexDirection: 'row',
          alignSelf:"flex-start",
          transform: [{translateX: slideAnimation}],
        }}>
        <View
          style={{
            height: '100%',
            width: width,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
         <CustomTextInput type={"shield"}/>
          <CustomTextInput type={"email"}/>
        </View>
        <View
          style={{
            height: '100%',
            width: width,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <CustomTextInput type={"password"} />
          <CustomTextInput type={"password"} />
        </View>
        <View
          style={{
            height: '100%',
            width: width,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <CustomTextInput type={"token"} />
          <CustomTextInput type={"code"} />
        </View>
        <View
          style={{
            height: '100%',
            width: width,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
        </View>
      </Animated.View>
      <View
        style={{
          height: 30,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Pressable
          onPress={() => {
            if (stap < 0) {
              setStap(s => s + 1);
            }
          }}
          style={{
            height: 25,
            width: 25,
          }}>
          <View
            style={{
              height: 25,
              width: 25,
            }}>
            <Image
              source={arrow}
              style={{
                height: 25,
                width: 25,
              }}
            />
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            if (stap > -2) {
              setStap(s => s - 1);
            }
          }}
          style={{
            height: 25,
            width: 25,
          }}>
          <View
            style={{
              height: 25,
              width: 25,
              transform: [{rotate: '180deg'}],
            }}>
            <Image
              source={arrow}
              style={{
                height: 25,
                width: 25,
              }}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
}


export default Forgot