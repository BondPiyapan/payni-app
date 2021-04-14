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
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView
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
      price: '0',
      bankSelect: { id: 0, nameBank: 'เลือกธนาคารผู้รับโอน', img: null },
      bankData: [
        { id: 1, nameBank: 'ธนาคารกรุงศรี', img: require('../../../../../../assets/images/icon_bank/BAY128-01.png') },
        { id: 2, nameBank: 'ธนาคารกรุงเทพ', img: require('../../../../../../assets/images/icon_bank/BBL_128.png') },
        { id: 3, nameBank: 'ธนาคารกสิกรไทย', img: require('../../../../../../assets/images/icon_bank/kbank-128.png') },
        { id: 4, nameBank: 'ธนาคารธนชาติ', img: require('../../../../../../assets/images/icon_bank/Tbank128-01.png') },
        { id: 5, nameBank: 'ธนาคารยูโอบี', img: require('../../../../../../assets/images/icon_bank/UOB128.png') },
        { id: 6, nameBank: 'ธนาคารไทยพาณิชย์', img: require('../../../../../../assets/images/icon_bank/scb-128.png') },
        { id: 7, nameBank: 'ธนาคารทีเอ็มบี', img: require('../../../../../../assets/images/icon_bank/TMB128-01.png') },
      ],
      showBankSelect: false
    }
  }

  onEnterTextFirstname = (TextInputValue) => {

    if (TextInputValue.trim() != 0) {
      this.setState({ price: TextInputValue });
    } else {
      this.setState({ price: '0' });
    }
  }

  renderItemBank(item) {
    return (
      <View>
        <TouchableOpacity onPress={() =>
          this.setState({
            bankSelect: item, showBankSelect: false
          })
        }
          style={{ height: 40, alignItems: 'center', flexDirection: 'row', paddingHorizontal: hp('2%') }}>
          <Images
            width={width * .07}
            source={item.img}
          />
          <Text style={{ fontFamily: 'sukhumvit-set', fontSize: 16, marginLeft: hp('2%') }}>{item.nameBank}</Text>
        </TouchableOpacity>
        <View style={{ height: 1, backgroundColor: '#CED7DE', marginVertical: hp('1%'), marginHorizontal: hp('2%') }} />

      </View>
    )
  }

  showBankSelect() {
    return (
      <Modal
        visible={this.state.showBankSelect}
        transparent={true}
      >
        <View style={{
          backgroundColor: 'rgba(0, 0, 0, 0.30)',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <View style={{ padding: 10, backgroundColor: '#fff', width: width * .8, borderRadius: 10, marginBottom: 70, marginTop: 70 }}>
            <FlatList
              data={this.state.bankData}
              renderItem={({ item }) => this.renderItemBank(item)}
              keyExtractor={(item, index) => index}
            />

            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.setState({
                showBankSelect: false,
              })}
                style={{
                  height: 30, width: width * .3, backgroundColor: '#FF3333', alignItems: 'center', justifyContent: 'center', borderRadius: 5, marginTop: 10
                }}>
                <Text style={{
                  fontSize: 18,
                  color: '#fff',
                  fontFamily: 'sukhumvit-set',
                }}>ปิด</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }

  checkOutTransferBank() {
    if (this.state.bankSelect.id == 0) {
      alert('กรุณาเลือกธนาคารผู้รับโอน')
    } else {
      this.props.navigation.navigate('CheckOutTransterBank', { price: this.state.price, bankSelect: this.state.bankSelect })
    }

  }


  render() {
    return (
      <View style={styles.container}>
          <View style={{ padding: 10 }}>
            <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2%'), marginVertical: hp('2%') }}>ชื่อ</Text>
            <TextInput
              placeholder={'ชื่อผู้รับโอน'}
              style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%') }}
              underlineColorAndroid={'transparent'}
              numberOfLines={1}
              returnKeyType={"done"}
              maxLength={50}
            />
            <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
            <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2%'), marginVertical: hp('2%') }}>บัญชี</Text>
            <TextInput
              placeholder={'เลขบัญชีธนาคาร'}
              style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%') }}
              underlineColorAndroid={'transparent'}
              keyboardType={'number-pad'}
              numberOfLines={1}
              returnKeyType={"done"}
              maxLength={250}
            />
            <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
            <TouchableOpacity onPress={() => this.setState({
              showBankSelect: true
            })}
              style={{ width: width, alignItems: 'center', flexDirection: 'row', marginVertical: hp('2%') }}>

              {this.state.bankSelect.img == null ?
                <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2%') }}>{this.state.bankSelect.nameBank}</Text>
                :
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Images
                    width={width * .07}
                    source={this.state.bankSelect.img}
                  />
                  <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2%'), marginLeft: hp('2%') }}>{this.state.bankSelect.nameBank}</Text>
                </View>
              }
              <Icon.Entypo style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%') }} name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
            <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2%'), marginTop: hp('2%') }}>จำนวนเงิน</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('5%'), color: '#03DAC6' }}>฿ </Text>
              <TextInput
                onChangeText={TextInputValue => this.onEnterTextFirstname(TextInputValue)}
                placeholder={'0.00'}
                style={{ fontFamily: 'sukhumvit-set', fontSize: hp('5%') }}
                underlineColorAndroid={'transparent'}
                numberOfLines={1}
                keyboardType={'number-pad'}
                returnKeyType={"done"}
                maxLength={250}
              />
            </View>
            <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
          </View>
          <KeyboardAvoidingView behavior='padding' style={{
          flex: 1
        }}>
        <View style={{ alignItems: 'center', position: 'absolute', bottom: 0, right: 0, left: 0 }}>
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
          {this.state.price == '0' || this.state.bankSelect.id == 0 ?
            <TouchableOpacity disabled={true} style={{ backgroundColor: '#ccc', padding: 8, width: width * .9, alignItems: 'center', borderRadius: 5, marginBottom: 20 }}>
              <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), color: '#fff' }}>ถัดไป</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CheckOutTransterBank', { price: this.state.price, bankSelect: this.state.bankSelect })}
              style={{ backgroundColor: '#03DAC6', padding: 8, width: width * .9, alignItems: 'center', borderRadius: 5, marginBottom: 20 }}>
              <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), color: '#fff' }}>ถัดไป</Text>
            </TouchableOpacity>
          }
        </View>
        </KeyboardAvoidingView>
        {this.showBankSelect()}

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
