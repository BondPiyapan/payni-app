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

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const images = [
  "http://img.qdaily.com/article/banner/20170801113352Nruq7ySUiAh8e3L1.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
  "http://img.qdaily.com/article/banner/201707312210334UMcDGil9SnKWh1o.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
  "http://img.qdaily.com/article/banner/20170731145444Awq5zJK7Tok2sC3V.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1"
];

export default class AddAddressbook extends React.Component {


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
            <View 
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 20 }}>
              <View style={{ flexDirection: 'column', flex: 0.35 }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%') }}>ชื่อ</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center', flex: 0.8, justifyContent:'flex-end' }}>
              <TextInput
                        placeholder={'ชื่อ'}
                        style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.4%') }}
                        underlineColorAndroid={'transparent'}
                        numberOfLines={1}
                        returnKeyType={"done"}/>
              </View>
            </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          <View 
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 20 }}>
              <View style={{ flexDirection: 'column', flex: 0.35 }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%') }}>โทรศัพท์</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center', flex: 0.8, justifyContent:'flex-end' }}>
              <TextInput
                        placeholder={'จำเป็น'}
                        style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.4%') }}
                        underlineColorAndroid={'transparent'}
                        numberOfLines={1}
                        returnKeyType={"done"}/>
              </View>
            </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          <View 
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 20 }}>
              <View style={{ flexDirection: 'column', flex: 0.35 }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%') }}>รหัสไปรษณีย์</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center', flex: 0.8, justifyContent:'flex-end' }}>
              <TextInput
                        placeholder={'จำเป็น'}
                        style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.4%') }}
                        underlineColorAndroid={'transparent'}
                        numberOfLines={1}
                        keyboardType={'number-pad'}
                        returnKeyType={"done"}/>
              </View>
            </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          <View 
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 20 }}>
              <View style={{ flexDirection: 'column', flex: 0.35 }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%') }}>จังหวัด</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center', flex: 0.8, justifyContent:'flex-end' }}>
              <TextInput
                        placeholder={'จำเป็น'}
                        style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.4%') }}
                        underlineColorAndroid={'transparent'}
                        numberOfLines={1}
                        returnKeyType={"done"}/>
              </View>
            </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          <View 
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 20 }}>
              <View style={{ flexDirection: 'column', flex: 0.35 }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%') }}>เขต/อำเภอ</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center', flex: 0.8, justifyContent:'flex-end' }}>
              <TextInput
                        placeholder={'จำเป็น'}
                        style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.4%') }}
                        underlineColorAndroid={'transparent'}
                        numberOfLines={1}
                        returnKeyType={"done"}/>
              </View>
            </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          <View 
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 20 }}>
              <View style={{ flexDirection: 'column', flex: 0.35 }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%') }}>แขวง/ตำบล</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center', flex: 0.8, justifyContent:'flex-end' }}>
              <TextInput
                        placeholder={'จำเป็น'}
                        style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.4%') }}
                        underlineColorAndroid={'transparent'}
                        numberOfLines={1}
                        returnKeyType={"done"}/>
              </View>
            </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          <View 
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 20 }}>
              <View style={{ flexDirection: 'column', flex: 0.35 }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%') }}>บ้านเลขที่/ถนน</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center', flex: 0.8, justifyContent:'flex-end' }}>
              <TextInput
                        placeholder={'จำเป็น'}
                        style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.4%') }}
                        underlineColorAndroid={'transparent'}
                        numberOfLines={1}
                        returnKeyType={"done"}/>
              </View>
            </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
          <View 
              style={{ width: width, alignItems: 'center', flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 20 }}>
              <View style={{ flexDirection: 'column', flex: 0.35 }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%') }}>ข้อมูลเพิ่มเติม</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center', flex: 0.8, justifyContent:'flex-end' }}>
              <TextInput
                        placeholder={'จำเป็น'}
                        style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.4%') }}
                        underlineColorAndroid={'transparent'}
                        numberOfLines={1}
                        returnKeyType={"done"}/>
              </View>
            </View>
          <View style={{ height: 1, backgroundColor: '#CED7DE' }} />

          </ScrollView>
          <View style={{alignItems:'center', position:'absolute', bottom: 0, right:0, left: 0}}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('AddAddressbook')}
                    style={{ backgroundColor: '#03DAC6', padding: 8, width: width * .9, alignItems: 'center', borderRadius: 5, marginBottom: 20 }}>
                        <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), color: '#fff' }}>บันทึก</Text>
                    </TouchableOpacity>
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
