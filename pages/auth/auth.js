import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  View,
} from 'react-native';
import background from '../../assets/background/loginbackgroud.png';
import subBackGround from '../../assets/background/subbg.png';
import forgotIcon from '../../assets/logo/forgot.png';
import loginIcon from '../../assets/logo/login.png';
import forGotIcon from '../../assets/text/fa.png';
import LogInIcon from '../../assets/text/login.png';
import SignUpIcon from '../../assets/text/Signup.png';
import Forgot from './forgot/forgot';
import Login from './login/login';
import Signup from './signup/signup';
import userCreate from '../../assets/logo/create.png'
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function Auth() {
  const scrollViews = useRef(null);
  const [scrollHeight, setHeight] = useState('100%');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setHeight('120%');
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setHeight('100%');
    });
  }, []);

  return (
    <ImageBackground
      source={background}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: height,
        width: '100%',
      }}>
      <View
        style={{
          height: scrollHeight,
          width: '100%',
          position: 'relative',
        }}>
        <KeyboardAvoidingView
          style={{
            flex: 1,
          }}>
          <ScrollView
            ref={scrollViews}
            style={{
              width: '100%',
              height: 0,
              position: 'relative',
            }}>
            <View
              style={{
                width: '100%',
                height: height * 0.27,
                display: 'flex',
                justifyContent: 'flex-end',
                flexDirection: 'column',
              }}>
              <Image
                source={
                  index == 0 ? SignUpIcon : index == 1 ? LogInIcon : forGotIcon
                }
                style={{
                  height: 60,
                  width: index == 0 ? 130 : index == 1 ? 100 : 250,
                }}
              />
            </View>
            <ImageBackground
              source={subBackGround}
              resizeMode="cover"
              style={{}}>
              <View
                style={{
                  width: '100%',
                  height: height * 0.55,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  position: 'relative',
                }}>
                {index == 0 ? <Signup /> : index == 1 ? <Login /> : <Forgot />}
              </View>
            </ImageBackground>
            <View
              style={{
                width: '100%',
                height: 50,
                marginTop: 10,
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Pressable
                onPress={() => {
                  if (index == 0) {
                    setIndex(1);
                  } else if (index == 1) {
                    setIndex(0);
                  } else if (index == 2) {
                    setIndex(0);
                  }
                }}
                style={{
                  height: 50,
                  width: 50,
                }}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                  }}>
                  <Image
                    source={index == 0 ? loginIcon :index == 1?userCreate:index == 2? userCreate:null}
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  />
                </View>
              </Pressable>

              <Pressable
                onPress={() => {
                  if (index == 0) {
                    setIndex(2);
                  } else if (index == 1) {
                    setIndex(2);
                  } else if (index == 2) {
                    setIndex(1);
                  }
                }}
                style={{
                  height: 50,
                  width: 50,
                }}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                  }}>
                  <Image
                    source={index == 0 ? forgotIcon : index == 1 ? forgotIcon:index == 2?loginIcon:null}
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  />
                </View>
              </Pressable>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}
