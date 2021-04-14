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

export default class ProfileDetail extends React.Component {


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
            <TouchableOpacity
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingVertical: 25 }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), marginLeft: hp('3%') }}>รูปภาพ</Text>
              </View>
              <View style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%'), flexDirection:'row', alignItems:'center' }}>
              <Images
                width={width * .12}
                source={{uri: 'https://th.jobsdb.com/th-th/cms/employer/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'}}
              />
              <Icon.Entypo name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          <View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('EditName')}
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingVertical: 15 }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), marginLeft: hp('3%') }}>ชื่อเล่น</Text>
              </View>
              <View style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%'), flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), marginLeft: hp('3%'), color: '#999' }}>ตั้งค่า</Text>
              <Icon.Entypo name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          <View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('EditID')}
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingVertical: 15 }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), marginLeft: hp('3%') }}>PayNi ID</Text>
              </View>
              <View style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%'), flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), marginLeft: hp('3%'), color: '#999' }}>ตั้งค่า</Text>
              <Icon.Entypo name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          <View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('EditEmail')}
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingVertical: 15 }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), marginLeft: hp('3%') }}>Email</Text>
              </View>
              <View style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%'), flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), marginLeft: hp('3%'), color: '#999' }}>ยังไม่ได้เชื่อมต่อ</Text>
              <Icon.Entypo name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          <View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('VerifyProfile')}
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingVertical: 15 }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), marginLeft: hp('3%') }}>การยืนยันตัวตน</Text>
              </View>
              <View style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%'), flexDirection:'row', alignItems:'center' }}>
              <Icon.AntDesign name="idcard" size={hp('3.5%')} color="#03DAC6" />
              <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), color: '#999' }}> PayNi ******</Text>
              <Icon.Entypo name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          <View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('MainAddressbook')}
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingVertical: 15 }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), marginLeft: hp('3%') }}>Address Book</Text>
              </View>
              <View style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%'), flexDirection:'row', alignItems:'center' }}>
              <Icon.Entypo name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          <View style={{alignItems:'center', marginTop: 10}}>
          <Images
                            width={width * .5}
                            source={require('../../../../assets/images/qrcode.png')}
                        />
                        <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), color: '#999' }}>สแกน QR โค้ดด้านบนเพื่อทำการโอน</Text>
          </View>
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
