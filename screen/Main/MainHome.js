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
  FlatList,
  Modal,
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
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as LocalAuthentication from 'expo-local-authentication';
import * as Updates from 'expo-updates';
const images = [
  "http://img.qdaily.com/article/banner/20170801113352Nruq7ySUiAh8e3L1.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
  "http://img.qdaily.com/article/banner/201707312210334UMcDGil9SnKWh1o.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
  "http://img.qdaily.com/article/banner/20170731145444Awq5zJK7Tok2sC3V.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1"
];

export default class MainHome extends React.Component {


  constructor() {
    super()
    this.state = {
      hasName: null,
      loading: true,
      loader: true,
      device_token: '',
      isTablet: false,
      dataGrid: [
        {
          id: 1,
          name: 'โปรโมชัน',
          src: require('../../assets/images/icon_menu/promotion_payni.png'),
          screen: 'MainPromotion'
        },
        {
          id: 2,
          name: 'แพ็กเกจเสริม',
          src: require('../../assets/images/icon_menu/network.png'),
          screen: 'MainPackageMobile'
        },
        {
          id: 3,
          name: 'เติมเงินมือถือ',
          src: require('../../assets/images/icon_menu/smartphone.png'),
          screen: 'MainTopupMobile'
        },
        {
          id: 4,
          name: 'จ่ายบิล',
          src: require('../../assets/images/icon_menu/bill.png'),
          screen: 'MainPayBill'
        },
        {
          id: 5,
          name: 'ตั๋วหนังเมเจอร์',
          src: require('../../assets/images/icon_menu/logo_major.png'),
          screen: 'MainPromotion'
        },
        {
          id: 6,
          name: 'ซื้อบัตรเติมเงิน',
          src: require('../../assets/images/icon_menu/prepaid-card.png'),
          screen: 'MainTopupCard'
        },
        {
          id: 7,
          name: 'เติมเกม',
          src: require('../../assets/images/icon_menu/game-console.png'),
          screen: 'MainTopupGames'
        },
        {
          id: 8,
          name: 'ตั๋วหนังเอสเอฟ',
          src: require('../../assets/images/icon_menu/SF.png'),
          screen: 'MainPromotion'
        },
        {
          id: 9,
          name: 'ร้านค้าใกล้คุณ',
          src: require('../../assets/images/icon_menu/nearby.png'),
          screen: 'MainPromotion'
        },
        {
          id: 10,
          name: 'สั่งพิซซ่า',
          src: require('../../assets/images/icon_menu/27-thepizzacompany.png'),
          screen: 'MainPromotion'
        },
        {
          id: 11,
          name: 'เติมเงินอีซี่พาส',
          src: require('../../assets/images/icon_menu/easypass.png'),
          screen: 'MainPromotion'
        },
        {
          id: 12,
          name: 'Shoppee',
          src: require('../../assets/images/icon_menu/shopee.png'),
          screen: 'MainPromotion'
        },
        {
          id: 13,
          name: 'เรียกเก็บเงิน',
          src: require('../../assets/images/icon_menu/payment.png'),
          screen: 'MainChekBill'
        },
        {
          id: 14,
          name: 'โอนเงิน',
          src: require('../../assets/images/icon_menu/money-transfer.png'),
          screen: 'MainTransfer'
        },
        {
          id: 15,
          name: 'เติมเงินวอลเล็ท',
          src: require('../../assets/images/icon_menu/wallet.png'),
          screen: 'MainTopupWallet'
        },
        {
          id: 16,
          name: 'เพิ่มเติม',
          src: require('../../assets/images/icon_menu/other-128.png'),
          screen: 'MainPromotion'
        },
      ],
      bannerimg: [
        require('../../assets/images/Banner.png'),
        require('../../assets/images/Banner1.png'),
        require('../../assets/images/Banner11.png'),
        require('../../assets/images/Banner12.png'),
      ],
      showPincode: true,
      code: '',
      password: '',
      loadingPin: false,
      showErrorPin: false
    }
  }

  async componentDidMount() {
    // try {
    //   const update = await Updates.checkForUpdateAsync();
    //   alert(update.isAvailable)
    //   if (update.isAvailable) {
    //     await Updates.fetchUpdateAsync();
    //     alert('Have update!')
    //   };
    // } catch (e) {
    //   console.log(alert(e));
    // }
    // let compatible = await LocalAuthentication.hasHardwareAsync();
    // if (compatible) {
    //   this.handleAuthentication();
    //   // this.checkForBiometrics();
    // }
    // else alert('Current device does not have the necessary hardware!')
  }

  checkForBiometrics = async () => {
    let biometricRecords = await LocalAuthentication.isEnrolledAsync();
    if (!biometricRecords) {
      alert('No Biometrics Found')
    } else {
      alert('Biometrics Found')
      this.handleAuthentication();
    }
  };

  handleAuthentication = async () => {

    let result = await LocalAuthentication.authenticateAsync();
    console.log('faceid', result)
    // if (result.success) {
    //   alert('Authentication Success')
    // }
    // else alert('Authentication Failed')
  }

  _checkCode = (code) => {
    this.setState({ loadingPin: true, showErrorPin: false })
    setTimeout(() => {
      if (code == '123456') {
        this.setState({ loadingPin: false, showPincode: false })
      } else {
        this.setState({
          code: '',
          loadingPin: false,
          showErrorPin: true
        })
      }
    }, 1000);

  }

  renderItem(item) {
    return (
      <View style={{ width: wp('20%'), marginHorizontal: hp('1%'), marginVertical: hp('1.2%'), alignItems: 'center' }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(item.screen)}
          style={{ alignItems: 'center' }}>
          <ResponsiveImage
            source={item.src}
            initWidth='40'
            initHeight='40'
          />
        </TouchableOpacity>
        <Text style={{
          color: '#999',
          marginTop: hp('1%'),
          fontSize: hp('1.53%'),
          width: wp('17.5%'),
          textAlign: 'center',
          fontFamily: 'sukhumvit-set',
        }}>{item.name}</Text>
      </View>
    )
  }

  showPincode() {
    const { code, password } = this.state;
    return (
      <Modal
        visible={this.state.showPincode}
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
          justifyContent: 'flex-end'
        }}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding" : null}
          >
            <View style={{
              backgroundColor: '#fff', width: width, alignItems: 'center'
            }}>
              {/* 
            <TouchableOpacity 
              style={{ width: width, alignItems: 'center', flexDirection: 'row', marginTop: 10 }}>
              <Icon.Entypo name="chevron-small-left" size={hp('4.5%')} color="#ccc" />
            </TouchableOpacity> */}
              <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%') }}>ใส่รหัสผ่าน</Text>
              </View>
              <View style={{ padding: 20 }}>
                {this.state.loadingPin == true ? <ActivityIndicator size="large" color="#03DAC6" /> :
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
                    autoFocus={true}
                    keyboardType={'phone-pad'}
                    codeLength={6}
                    onFulfill={this._checkCode}
                    maskDelay={500}
                    password={true}
                    cellStyle={null}
                    cellStyleFocused={null}
                    value={code}
                    onTextChange={code => this.setState({ code })}
                  />
                }

                {this.state.showErrorPin == true ?
                  <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), color: 'red' }}>รหัสของคุณผิดพลาด</Text>
                  </View> :
                  null
                }
              </View>

            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: width, height: hp('27 %'), backgroundColor: '#03DAC6', alignItems: 'center', justifyContent: 'flex-start' }}>
          <View style={{ flexDirection: 'row', marginTop: hp('10%'), }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScan')}
              style={{ alignItems: 'center', marginRight: hp('5%') }}>
              <Icon.MaterialCommunityIcons
                size={hp('5%')}
                name="barcode-scan"
                color="#fff"
              />
              <Text style={{
                color: '#fff',
                fontSize: hp('2.2%'),
                fontFamily: 'sukhumvit-set',
              }}>สแกน</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MainPayQR')}
              style={{ alignItems: 'center', marginRight: hp('5%') }}>
              <Icon.MaterialIcons
                size={hp('5%')}
                name="payment"
                color="#fff"
              />
              <Text style={{
                color: '#fff',
                fontSize: hp('2.2%'),
                fontFamily: 'sukhumvit-set',
              }}>ชำระ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MainCoupon')}
              style={{ alignItems: 'center', marginRight: hp('5%') }}>
              <Icon.MaterialIcons
                size={hp('5%')}
                name="card-giftcard"
                color="#fff"
              />
              <Text style={{
                color: '#fff',
                fontSize: hp('2.2%'),
                fontFamily: 'sukhumvit-set',
              }}>คูปอง</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MainWallet')} style={{ alignItems: 'center', }}>
              <Icon.AntDesign
                size={hp('5%')}
                name="wallet"
                color="#fff"
              />
              <Text style={{
                color: '#fff',
                fontSize: hp('2.2%'),
                fontFamily: 'sukhumvit-set',
              }}>วอลเล็ท</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            backgroundColor: '#fff',
            width: width * .9, height: hp('12%'),
            borderRadius: 10,
            marginTop: hp('2.1%'),
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <View style={{ flex: 0.5, padding: hp('2%') }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon.AntDesign
                    size={hp('4%')}
                    name="wallet"
                    color="#03DAC6"
                  />
                  <Text style={{
                    color: '#000',
                    marginLeft: hp('1%'),
                    fontSize: hp('2%'),
                    fontFamily: 'sukhumvit-set-bold',
                  }}>฿ 0.00</Text>
                  <Icon.Entypo
                    size={hp('3%')}
                    name="chevron-small-right"
                    color="#999"
                  />
                </View>
                <Text style={{
                  color: '#999',
                  marginTop: hp('1%'),
                  fontSize: hp('1.7%'),
                  fontFamily: 'sukhumvit-set',
                }}>เติมเงินอัตโนมัติ คลิก!</Text>
              </View>
              <View
                style={{
                  marginVertical: 20,
                  borderLeftWidth: 1,
                  borderLeftColor: '#ccc',
                }}
              />
              <View style={{ flex: 0.5, padding: hp('2%') }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <ResponsiveImage
                    source={require('../../assets/images/scoin.png')}
                    initWidth='25'
                    initHeight='25'
                  />
                  <Text style={{
                    color: '#000',
                    marginLeft: hp('1%'),
                    fontSize: hp('2%'),
                    fontFamily: 'sukhumvit-set-bold',
                  }}>0.00 Coins</Text>
                  <Icon.Entypo
                    size={hp('3%')}
                    name="chevron-small-right"
                    color="#999"
                  />
                </View>
                <Text style={{
                  color: '#e3bb1c',
                  marginTop: hp('1.5%'),
                  fontSize: hp('1.7%'),
                  fontFamily: 'sukhumvit-set',
                }}>Shopping Coins ของฉัน</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginTop: hp('8%'), height: height, alignItems: 'center' }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              data={this.state.dataGrid}
              renderItem={({ item }) => this.renderItem(item)}
              numColumns={4}
              scrollEnabled={false}
              keyExtractor={(item, index) => index}
            />
            <View style={{ padding: 10 }}>
              <Carousel
                autoplay
                loop
                index={0}
                pageSize={width * .92}
                pageIndicatorStyle={{ borderRadius: 10 }}
              >
                {this.state.bannerimg.map((image, index) => {
                  return (
                    <View style={{ alignItems: 'center' }} key={index}>
                      <Images
                        borderRadius={10}
                        width={width * .92}
                        source={image}
                      />
                    </View>
                  );
                })}
              </Carousel>
            </View>
            <View style={{ height: height, alignItems: 'center', marginBottom: -170 }}>

              <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
                <View style={{ flex: 0.5 }}>
                  <Images
                    borderRadius={10}
                    width={width * .44}
                    source={require('../../assets/images/banner3.png')}
                  />
                </View>
                <View style={{ flex: 0.5, alignItems: 'center', }}>
                  <Images
                    borderRadius={10}
                    width={width * .44}
                    source={require('../../assets/images/Banner4.png')}
                  />
                  <Images
                    style={{ marginTop: hp('1%') }}
                    borderRadius={10}
                    width={width * .44}
                    source={require('../../assets/images/Banner5.png')}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {this.showPincode()}
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
