import React from 'react';
import {Image, Pressable, View} from 'react-native';
import arrow from '../../../assets/icons/arrow.png';
import loginIcon from '../../../assets/logo/login.png';
import CustomTextInput from '../../../components/textinput/input';
export default function Login() {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: 80,
          width: 80,
        }}>
        <Image
          source={loginIcon}
          style={{
            height: 80,
            width: 80,
          }}
        />
      </View>
      <CustomTextInput placeholder={'Enter Your Name'} />
      <CustomTextInput placeholder={'Enter Your Name'} />
      <Pressable
        style={{
          height: 55,
          width: 180,
          backgroundColor: 'gray',
          borderRadius: 40,
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          
        }}>
        <Image
          source={arrow}
          style={{
            height: 20,
            width: 20,
            transform:[{rotate:"180deg"}]
          }}
        />
      </Pressable>
    </View>
  );
}
