import React from 'react';
import {
  ImageBackground,
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

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const images = [
  "http://img.qdaily.com/article/banner/20170801113352Nruq7ySUiAh8e3L1.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
  "http://img.qdaily.com/article/banner/201707312210334UMcDGil9SnKWh1o.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
  "http://img.qdaily.com/article/banner/20170731145444Awq5zJK7Tok2sC3V.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1"
];

export default class MainChekBill extends React.Component {


  constructor() {
    super()
    this.state = {
      hasName: null,
      loading: true,
      loader: true,
      device_token: '',
      isTablet: false,
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', marginTop: 50 }}>
          <Images
            width={width * .3}
            source={require('../../../../../assets/images/icon_bank/wallet.png')}
          />
          <View style={{ marginTop: 20, alignItems: 'center' }}>
            <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>ส่งคำขอ</Text>
            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.8%'), marginTop: hp('3%'), color: '#ccc' }}>คุณสามารถส่งคำขอเรียกเก็บเงินหรือแชร์</Text>
            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.8%'), color: '#ccc' }}>บิลกับเพื่อนของคุณได้</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailChekBill')}
              style={{ backgroundColor: '#03DAC6', padding: 10, width: width * .9, marginTop: 20, alignItems: 'center' }}>
              <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), color: '#fff' }}>เรียกเก็บเงินหรือแชร์บิล</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ padding: 20 }}>
          <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2%'), }}>รายการล่าสุด</Text>
          <View style={{ flexDirection: 'row', alignItems:'center' }}>
            <View style={{ flex: 0.1 }}>
              <ImageBackground style={{
                height: hp('5%'),
                width: hp('5%'),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: hp('5%') / 2,
              }}
                imageStyle={{ borderRadius: hp('5%') / 2 }}
                source={{ uri: 'https://th.jobsdb.com/th-th/cms/employer/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png' }}
              ></ImageBackground>
            </View>
            <View style={{flex: 0.45, marginLeft: hp('2%')}}>
            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), }}>PayNi</Text>
            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.8%'), color: '#999' }}>25/12/2563 16:07</Text>
            </View>
            <View style={{flex: 0.45, alignItems:'flex-end'}}>
            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), }}>฿ 50.00</Text>
            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.8%')}}>รอดำเนินการชำระเงิน</Text>
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
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
