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
  SafeAreaView
} from 'react-native';
import { WebBrowser } from 'expo';
import * as Notifications from 'expo-notifications'
const { height, width } = Dimensions.get('window')
import Images from 'react-native-scalable-image';
import * as Localization from 'expo-localization';
import * as Permissions from 'expo-permissions'
import PhoneInput from "react-native-phone-number-input";
import Constants from 'expo-constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class MainLogin extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor() {
    super()
    this.state = {
      hasName: null,
      loading: true,
      loader: true,
      device_token: '',
      isTablet: false
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.wrapper}>
          <View style={{ marginVertical: hp('2%'), alignItems: 'center' }}>
            <Text style={styles.buttonTextBlack}>กรอกหมายเลขโทรศัพท์</Text>
            <Text style={[styles.buttonTextBlack2, { marginTop: 5 }]}>หมายเลขโทรศัพท์จะถูกใช้ในการล็อกอิน/ลงทะเบียน</Text>
          </View>
          <PhoneInput
            defaultValue={''}
            defaultCode="TH"
            withDarkTheme
            onChangeFormattedText={(code) => {
              console.log(`Code is ${code}, you are good to go!`)
            }}
          />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}
            style={[styles.button, styles.buttonMobile, { marginTop: hp('7%'), }]}>
            <Text style={styles.buttonText}>ต่อไป</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    marginTop: Constants.statusBarHeight + 50,
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
  buttonMobile: {
    backgroundColor: '#4CAF50',
  },
  message: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  buttonTextBlack: {
    fontSize: hp('2.6%'),
    color: '#000',
    fontFamily: 'sukhumvit-set-bold',
  },
  buttonTextBlack2: {
    fontSize: hp('2%'),
    color: '#000',
    fontFamily: 'sukhumvit-set',
  },
  buttonText: {
    fontSize: hp('2.5%'),
    color: '#fff',
    fontFamily: 'sukhumvit-set',
  },
});
