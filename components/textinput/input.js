import React from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import show from '../../assets/icons/view.png'
import hide from '../../assets/icons/hidden.png'
import email from '../../assets/icons/email.png'
import token from '../../assets/icons/coin.png'
import code from '../../assets/icons/code.png'
import password from '../../assets/icons/password.png'
import shield from '../../assets/icons/shield.png'
import name from './../../assets/icons/name.png'
export default function CustomTextInput({
  height,
  width,
  error,
  placeholder,
  value,
  onchange,
  type,
  hide
}) {
  return (
    <View
      style={{
        height: 70,
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: '70%',
          width: '95%',
          position: 'relative',
          borderColor: error == null ? 'gray' : 'red',
          borderRadius: 50,
          borderWidth: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 30,
            width: 30,
            marginLeft: 10,
            marginRight: 10,
          }}>
          <Image
            style={{
              height: 30,
              width: 30,
            }}
            source={type=="name" ? name:type=="password"?password:type=="code"?code:type=="token"?token:type=="shield"?shield:email}
          />
        </View>
        <TextInput
          style={{
            height: '100%',
            width: '90%',
            alignSelf: 'center',
          }}
          placeholder={placeholder}
          onchange={onchange}
          value={value}
        />
        <View
          style={{
            height: 30,
            width: 30,
            marginLeft: 10,
            backgroundColor: 'red',
            position: 'absolute',
            right: 10,
            display: type == 'password' && hide==false ? 'flex' : 'none',
          }}>
          <Pressable
            style={{
              height: 30,
              width: 30,
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
              }}
              source={require('../../assets/icons/email.png')}
            />
          </Pressable>
        </View>
      </View>
      <Text
        style={{
          alignSelf: 'flex-start',
          color: 'red',
        }}>
        {error}
      </Text>
    </View>
  );
}
