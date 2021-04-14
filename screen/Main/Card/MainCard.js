import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  AsyncStorage,
  ActivityIndicator,
  FlatList
} from 'react-native';
import { WebBrowser } from 'expo';
import * as Notifications from 'expo-notifications'
const { height, width } = Dimensions.get('window')
import Images from 'react-native-scalable-image';
import * as Localization from 'expo-localization';
import * as Permissions from 'expo-permissions'
import * as Icon from '@expo/vector-icons'
import ResponsiveImage from "react-native-responsive-image";
import Carousel from 'react-native-banner-carousel';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const images = [
  "http://img.qdaily.com/article/banner/20170801113352Nruq7ySUiAh8e3L1.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
  "http://img.qdaily.com/article/banner/201707312210334UMcDGil9SnKWh1o.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
  "http://img.qdaily.com/article/banner/20170731145444Awq5zJK7Tok2sC3V.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1"
];

export default class MainCard extends React.Component {


  constructor() {
    super()
    this.state = {
      hasName: null,
      loading: true,
      loader: true,
      device_token: '',
      isTablet: false,
      code: '',
      password: '',
    }
  }

  _checkCode = (code) => {
    if (code == '123456') {
      alert('ผ่าน')
    } else {
      this.setState({
        code: ''
      })
    }
  }


  render() {
    const { code, password } = this.state;
    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>Custom Placeholder</Text>
        <SmoothPinCodeInput
          placeholder={<View style={{
            width: 10,
            height: 10,
            borderRadius: 25,
            opacity: 0.3,
            backgroundColor: '#999',
          }}></View>}
          mask={<View style={{
            width: 10,
            height: 10,
            borderRadius: 25,
            backgroundColor: '#03DAC6',
          }}></View>}
          ani
          codeLength={6}
          autoFocus={true}
          onFulfill={this._checkCode}
          maskDelay={500}
          password={true}
          cellStyle={null}
          cellStyleFocused={null}
          value={code}
          onTextChange={code => this.setState({ code })}
        /> */}
        <View style={{ alignItems: 'center', padding: 20 }}>
          <View style={{ width: width * .9, height: hp('28%'), backgroundColor: '#03DAC6', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('CreateCard')}
             style={{alignItems:'center'}}>
              <Icon.AntDesign
                name='pluscircleo'
                size={50}
                color={'#fff'}
              />
              <Text style={{
                color: '#fff',
                fontSize: hp('2.2%'),
                fontFamily: 'sukhumvit-set',
                marginTop: 5,
                textAlign: 'center'
              }}>เพิ่มบัตร</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  iconcenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    flex: 1,
  },
  button: {
    height: hp('7%'),
    width: width * .8,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonTablet: {
    height: hp('7%'),
    width: width * .6,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonMobile: {
    backgroundColor: '#4CAF50',
  },
  getStartedContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: hp('7%'),
    right: 0,
    left: 0
  },
  buttonText: {
    fontSize: hp('2.5%'),
    color: '#fff',
    fontFamily: 'sukhumvit-set',
  },
});
