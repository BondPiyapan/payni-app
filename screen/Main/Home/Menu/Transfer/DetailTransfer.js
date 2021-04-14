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

export default class DetailTransfer extends React.Component {


  constructor() {
    super()
    this.state = {
      hasName: null,
      loading: true,
      loader: true,
      device_token: '',
      isTablet: false,
      price: '0'
    }
  }

  onEnterTextFirstname = (TextInputValue) => {
    
    if (TextInputValue.trim() != 0) {
      this.setState({ price: TextInputValue});
  } else {
    this.setState({ price: '0'});
  }
}


  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2%'), }}>จำนวนเงิน</Text>
          <View style={{flexDirection: 'row'}}>
          <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('5%'), color: '#03DAC6' }}>฿ </Text>
          <TextInput
            onChangeText={TextInputValue => this.onEnterTextFirstname(TextInputValue)}
            placeholder={'0.00'}
            style={{ fontFamily: 'sukhumvit-set', fontSize: hp('5%') }}
            underlineColorAndroid={'transparent'}
            numberOfLines={1}
            keyboardType={'phone-pad'}
            returnKeyType={"done"}
            maxLength={250}
          />
          </View>
          <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginBottom: hp('2%'), color:'#999' }}>ยอดเงินปัจจุบันของคุณ (฿0.00)</Text>
          <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
          <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2%'), marginVertical: hp('2%')  }}>ผู้รับโอนเงิน</Text>
          <TextInput
            placeholder={'กรอกเบอร์โทรศัพท์ หรือ PayNi ID'}
            style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%') }}
            underlineColorAndroid={'transparent'}
            numberOfLines={1}
            returnKeyType={"done"}
            maxLength={50}
          />
          <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
          <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2%'), marginVertical: hp('2%')  }}>คำอธิบายรายการ</Text>
          <TextInput
            placeholder={'0-250 คำ'}
            style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%') }}
            underlineColorAndroid={'transparent'}
            numberOfLines={1}
            returnKeyType={"done"}
            maxLength={250}
          />
          <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
        </View>
        <View style={{alignItems:'center', position: 'absolute', bottom:0, right:0, left:0}}>
                    <View style={{
                        borderColor: '#fff', flexDirection: 'row',
                        paddingHorizontal: 20
                    }}>
                        <View style={{ flex: 0.5, alignItems: 'flex-start', marginVertical: hp('2%') }}>
                            <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>ทั้งหมด</Text>
                        </View>
                        <View style={{ flex: 0.5, alignItems: 'flex-end', marginVertical: hp('2%') }}>
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.4%'), color: '#03DAC6' }}>฿ {this.state.price}.00</Text>
                        </View>
                    </View>
                    {this.state.price == '0' ?
                    <TouchableOpacity disabled={true} style={{ backgroundColor: '#ccc', padding: 8, width: width * .9, alignItems: 'center', borderRadius: 5, marginBottom: 20 }}>
                        <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), color: '#fff' }}>ถัดไป</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('CheckOutTranster',{price: this.state.price})}
                    style={{ backgroundColor: '#03DAC6', padding: 8, width: width * .9, alignItems: 'center', borderRadius: 5, marginBottom: 20 }}>
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
