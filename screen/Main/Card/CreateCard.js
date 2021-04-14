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
  TextInput
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
      editNameCard: ''
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

  // text.replace(/[`~0-9!@#฿$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')

  onEnterText = (TextInputValue) => {

    if (TextInputValue.trim() != 0) {
      this.setState({ editNameCard: TextInputValue.replace(/[^A-Za-z]/ig, '') });
    } else {
      this.setState({ editNameCard: '' });
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
          <View style={{ width: width * .9, height: hp('28%'), backgroundColor: '#03DAC6', borderRadius: 10, }}>
            <View style={{ flex: 0.33, justifyContent: 'center', marginHorizontal: hp('3%'), flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 0.5, alignItems: 'flex-start' }}>
                <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('3%'), color: '#fff' }}>PAYNI CARD</Text>
              </View>
              <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                <Images
                  width={width * .2}
                  source={require('../../../assets/images/mastercard.png')}
                />
              </View>
            </View>
            <View style={{ flex: 0.33, alignItems: 'center', marginHorizontal: hp('3%'), flexDirection: 'row' }}>
              <View style={{ flex: 0.25, alignItems: 'center' }}>
                <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2%'), color: '#fff' }}>****</Text>
              </View>
              <View style={{ flex: 0.25, alignItems: 'center' }}>
                <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2%'), color: '#fff' }}>****</Text>
              </View>
              <View style={{ flex: 0.25, alignItems: 'center' }}>
                <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2%'), color: '#fff' }}>****</Text>
              </View>
              <View style={{ flex: 0.25, alignItems: 'center' }}>
                <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2%'), color: '#fff' }}>****</Text>
              </View>
            </View>
            <View style={{ flex: 0.33, flexDirection: 'row', marginHorizontal: hp('3%') }}>
              <View style={{ flex: 0.7, alignItems: 'flex-start' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.2%'), color: '#fff' }}>เจ้าของบัตร</Text>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), color: '#fff', marginRight: hp('3%'), textTransform: 'uppercase' }}>{this.state.editNameCard}</Text>
              </View>
              <View style={{ flex: 0.3, justifyContent: 'flex-end', flexDirection: 'row' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.2%'), color: '#fff', marginRight: hp('3%') }}>หมดอายุ</Text>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.2%'), color: '#fff' }}>CVC</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.1%'), color: '#ccc' }}>กรุณากรอกชื่อเพื่อแสดงบนบัตร</Text>
          <TextInput
            value={this.state.editNameCard}
            onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
            placeholder={'สูงสุด 15 ตัวอักษร'}
            style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.6%') }}
            underlineColorAndroid={'transparent'}
            numberOfLines={1}
            keyboardType={'ascii-capable'}
            returnKeyType={"done"}
            maxLength={15}
          />
          <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
          {this.state.editNameCard == '' ?
            <TouchableOpacity disabled={true} style={{ backgroundColor: '#ccc', padding: 8, width: width * .9, alignItems: 'center', borderRadius: 5, marginTop: 20 }}>
              <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), color: '#fff' }}>ถัดไป</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
              style={{ backgroundColor: '#03DAC6', padding: 8, width: width * .9, alignItems: 'center', borderRadius: 5, marginTop: 20 }}>
              <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), color: '#fff' }}>ถัดไป</Text>
            </TouchableOpacity>
          }

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
