import React from 'react';
import { Platform, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import MainLogin from '../screen/Login/MainLogin';
import VerifyOTP from '../screen/Login/VerifyOTP'
import CitizenCardVerify from '../screen/Login/VerifyCitizen/CitizenCardVerify'
import Provision from '../screen/Login/Provision'

export default createStackNavigator(
  {
    MainLogin: {
      screen: MainLogin,
      navigationOptions: ({ navigation }) => ({
        title: 'Login'
      })
    },
    VerifyOTP: {
      screen: VerifyOTP,
      navigationOptions: ({ navigation }) => ({
        title: null,
        headerTintColor: '#999',
        headerBackTitle: <Text style={{ fontFamily: 'sukhumvit-set' }}></Text>,
        headerStyle: {
          elevation: null,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        }
      })
    },
    CitizenCardVerify: {
      screen: CitizenCardVerify,
      navigationOptions: ({ navigation }) => ({
        title: null,
        headerTintColor: '#999',
        headerBackTitle: <Text style={{ fontFamily: 'sukhumvit-set' }}></Text>,
        headerStyle: {
          elevation: null,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        },
        header: null,
        headerLeft: ()=> null,
        gestureEnabled: false,
      })
    },
    Provision: {
      screen: Provision,
      navigationOptions: ({ navigation }) => ({
        title: null,
        headerTintColor: '#999',
        headerBackTitle: <Text style={{ fontFamily: 'sukhumvit-set' }}></Text>,
        headerStyle: {
          elevation: null,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        },
        headerLeft: ()=> null,
        gestureEnabled: false,
      })
    },
  }
);