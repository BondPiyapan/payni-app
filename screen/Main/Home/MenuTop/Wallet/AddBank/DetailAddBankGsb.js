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
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const images = [
    "http://img.qdaily.com/article/banner/20170801113352Nruq7ySUiAh8e3L1.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
    "http://img.qdaily.com/article/banner/201707312210334UMcDGil9SnKWh1o.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
    "http://img.qdaily.com/article/banner/20170731145444Awq5zJK7Tok2sC3V.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1"
];

export default class DetailAddBankGsb extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            hasName: null,
            loading: true,
            loader: true,
            device_token: '',
            isTablet: false,
            code: '',
            password: '',
        }
    }


    render() {
        if (typeBank = 1) {
            color = '#9021D4'
            nameBankTH = 'ธนาคารไทยพาณิชย์'
            nameBankEN = 'SAIM COMMERCIAL BANK'
            imgBank = require('../../../../../../assets/images/icon_bank/scb-128.png')
        } else if (typeBank = 2) {
            color = '#31C350'
            nameBankTH = 'ธนาคารไทยพาณิชย์'
            nameBankEN = 'SAIM COMMERCIAL BANK'
            imgBank = require('../../../../../../assets/images/icon_bank/kbank-128.png')
        } else if (typeBank = 3) {
            color = '#2AA9EE'
            nameBankTH = 'ธนาคารไทยพาณิชย์'
            nameBankEN = 'SAIM COMMERCIAL BANK'
            imgBank = require('../../../../../../assets/images/icon_bank/ktb-128.png')
        } else if (typeBank = 4) {
            color = '#3576F4'
            nameBankTH = 'ธนาคารไทยพาณิชย์'
            nameBankEN = 'SAIM COMMERCIAL BANK'
            imgBank = require('../../../../../../assets/images/icon_bank/BBL_128.png')
        } else if (typeBank = 5) {
            color = '#2285F2'
            nameBankTH = 'ธนาคารไทยพาณิชย์'
            nameBankEN = 'SAIM COMMERCIAL BANK'
            imgBank = require('../../../../../../assets/images/icon_bank/TMB128-01.png')
        } else if (typeBank = 6) {
            color = '#FDD600'
            nameBankTH = 'ธนาคารไทยพาณิชย์'
            nameBankEN = 'SAIM COMMERCIAL BANK'
            imgBank = require('../../../../../../assets/images/icon_bank/BAY128-01.png')
        } else if (typeBank = 7) {
            color = '#FB8D00'
            nameBankTH = 'ธนาคารไทยพาณิชย์'
            nameBankEN = 'SAIM COMMERCIAL BANK'
            imgBank = require('../../../../../../assets/images/icon_bank/Tbank128-01.png')
        } else if (typeBank = 8) {
            color = '#136DD5'
            nameBankTH = 'ธนาคารไทยพาณิชย์'
            nameBankEN = 'SAIM COMMERCIAL BANK'
            imgBank = require('../../../../../../assets/images/icon_bank/LHB-01.png')
        } else if (typeBank = 9) {
            color = '#E80291'
            nameBankTH = 'ธนาคารไทยพาณิชย์'
            nameBankEN = 'SAIM COMMERCIAL BANK'
            imgBank = require('../../../../../../assets/images/icon_bank/GBS128-01.png')
        } 
        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center', padding: 20 }}>
                    <View style={{ width: width * .9, height: hp('28%'), backgroundColor: '#E80291', borderRadius: 10, alignItems: 'flex-start', justifyContent: 'center' }}>
                        <View
                            style={{ flexDirection: 'row', marginLeft: hp('7%'), alignItems: 'center' }}>
                            <Images
                                width={width * .1}
                                source={require('../../../../../../assets/images/icon_bank/GBS128-01.png')}
                            />
                            <View style={{ marginLeft: hp('2%'), alignItems: 'flex-start', }}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: hp('2.2%'),
                                    fontFamily: 'sukhumvit-set-bold',
                                    textAlign: 'center'
                                }}>ธนาคารออมสิน</Text>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: hp('1.8%'),
                                    fontFamily: 'sukhumvit-set',
                                    textAlign: 'center'
                                }}>Government Savings Bank</Text>
                            </View>
                        </View>
                        <Text style={{
                            marginLeft: hp('7%'),
                            color: '#fff',
                            fontSize: hp('2.2%'),
                            fontFamily: 'sukhumvit-set-bold',
                            marginTop: 5,
                            textAlign: 'center'
                        }}>*    *    *    *    *    *    *    *    *    *</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#03DAC6', padding: 8, width: width * .9, alignItems: 'center', borderRadius: 5, marginBottom: 20 }}>
                        <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), color: '#fff' }}>ผู้บัญชีตอนนี้</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'flex-start', padding: 20, justifyContent: 'flex-start' }}>
                    <Text style={{
                        color: '#999',
                        fontSize: hp('2%'),
                        fontFamily: 'sukhumvit-set',
                        textAlign: 'center'
                    }}>คุณสามารถเชื่อมต่อบัญชีธนาคารกับ PayNi และสามารถใช้ได้ในทันที PayNi สงานสิทธิ์การลบบัญชีธนาคารที่ผูกไว้หากพบชื่อเจ้าของบัญชีไม่ตรงกับชื่อผู้ใช้</Text>
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
