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

export default class MainProfile extends React.Component {


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
      <View style={{
          backgroundColor: '#fff', borderRadius: 10, width: width,
        }}>
          <View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('ProfileDetail')}
              style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 12 }}>
              <Images
                width={width * .2}
                source={{uri: 'https://th.jobsdb.com/th-th/cms/employer/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'}}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>********89</Text>
              </View>
              <View style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%'), flexDirection:'row', alignItems:'center' }}>
              <Icon.FontAwesome name="qrcode" size={hp('4.5%')} color="#ccc" />
              <Icon.Entypo name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />

          <View>
            <TouchableOpacity
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10 }}>
              <Images
                width={width * .08}
                source={require('../../../assets/images/icon_profile/payni-S.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>Shopping Coins ของฉัน</Text>
              </View>
              <View style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%'), flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%'), color: '#ccc' }}>9.00 Coins</Text>
              <Icon.Entypo name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          <View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('MainHistory')}
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10 }}>
              <Images
                width={width * .08}
                source={require('../../../assets/images/icon_profile/payni-time.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>ประวัติการทำรายการ</Text>
              </View>
              <Icon.Entypo style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%') }} name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          <View>
            <TouchableOpacity
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10 }}>
              <Images
                width={width * .08}
                source={require('../../../assets/images/icon_profile/bill-2.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>บิลของฉัน</Text>
              </View>
              <Icon.Entypo style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%') }} name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />

          <View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('MainSecurityAccount')}
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10 }}>
              <Images
                width={width * .08}
                source={require('../../../assets/images/icon_profile/verified.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>ความปลอดภัยของบัญชี</Text>
              </View>
              <Icon.Entypo style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%') }} name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          <View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('MainSetting')}
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10 }}>
              <Images
                width={width * .08}
                source={require('../../../assets/images/icon_profile/payni-setting2.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>การตั้งค่า</Text>
              </View>
              <Icon.Entypo style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%') }} name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          <View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('MainHelpCenter')}
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10 }}>
              <Images
                width={width * .08}
                source={require('../../../assets/images/icon_profile/payni-faq.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>ศูนย์ช่วยเหลือ</Text>
              </View>
              <Icon.Entypo style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%') }} name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          <View>
            <TouchableOpacity
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10 }}>
              <Images
                width={width * .08}
                source={require('../../../assets/images/icon_profile/star.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>คุณชอบ PayNi ไหม? ให้คะแนนเลย</Text>
              </View>
              <Icon.Entypo style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%') }} name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          <View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('MainAbout')}
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10 }}>
              <Images
                width={width * .08}
                source={require('../../../assets/images/icon_profile/payni-!.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>เกี่ยวกับ PayNi</Text>
              </View>
              <Icon.Entypo style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%') }} name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          

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
