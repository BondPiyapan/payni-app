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

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const images = [
  "http://img.qdaily.com/article/banner/20170801113352Nruq7ySUiAh8e3L1.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
  "http://img.qdaily.com/article/banner/201707312210334UMcDGil9SnKWh1o.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
  "http://img.qdaily.com/article/banner/20170731145444Awq5zJK7Tok2sC3V.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1"
];

export default class MainNotification extends React.Component {


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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('MainNotipromo')}
              style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 12 }}>
              <Images
                width={width * .1}
                source={require('../../../assets/images/ic_promo.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>โปรโมชัน</Text>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.8%'), marginLeft: hp('3%'), color: '#999' }}>โปรโมชันมากมาย เร็วๆนี้!</Text>
              </View>
              <Icon.Entypo style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%') }} name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE', marginBottom: hp('1%') }} />

          <View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('MainSystem')}
              style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 12 }}>
              <Images
                width={width * .1}
                source={require('../../../assets/images/ic_setting.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>ระบบ</Text>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.8%'), marginLeft: hp('3%'), color: '#999' }}>การไฟฟ้าส่วนภูมิภาคปิดให้บริการ</Text>
              </View>
              <Icon.Entypo style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%') }} name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE', marginBottom: hp('1%') }} />

          <View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('MainOrder')}
              style={{ width: width, alignItems: 'flex-start', flexDirection: 'row', padding: 12 }}>
              <Images
                width={width * .1}
                source={require('../../../assets/images/ic_bill.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>รายการทั้งหมด</Text>

              <View style={{ flexDirection: 'column', marginLeft: hp('3%')  }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.8%')}}>เติมเงินเข้ากระเป๋า</Text>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.8%')}}>฿ 100.00</Text>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.6%'), color:'green'}}>สำเร็จ</Text>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.6%'), color:'#ccc'}}>21/12/2563</Text>
              </View>
              </View>
              <Icon.Entypo style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%'), marginTop: hp('1%') }} name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE', marginBottom: hp('1%') }} />
          <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>รายการอัพเดทบริการ</Text>
          <TouchableOpacity 
            style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 20 }}>
            <View style={{flex: 0.1}}>
            <Images
              width={width * .1}
              source={require('../../../assets/images/cancel-icon.png')}
            />
            </View>
            <View style={{ flexDirection: 'column', marginLeft: hp('2%'), flex: 0.55 }}>
              <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%') }}>คำสั่งซื้อของคุณถูกยกเลิก</Text>
              <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.8%'), color: '#ccc' }}>คำสั่งซื้อเลขที่ 1001001009 ได้ถูกยกเลิก เนื่องจากไม่มีการชำระเงิน</Text>
            </View>
            <View style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('3%'), alignItems: 'flex-end', flex: 0.3 }}>
              <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.8%'), color: '#ccc' }}>21/12/2563 11:34</Text>
            </View>
          </TouchableOpacity>
          </ScrollView>
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
