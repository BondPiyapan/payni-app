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
import BarcodeMask from 'react-native-barcode-mask';
import Constants from 'expo-constants'
import { Camera } from 'expo-camera';
import ReactNativeItemSelect from 'react-native-item-select';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const images = [
    "http://img.qdaily.com/article/banner/20170801113352Nruq7ySUiAh8e3L1.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
    "http://img.qdaily.com/article/banner/201707312210334UMcDGil9SnKWh1o.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
    "http://img.qdaily.com/article/banner/20170731145444Awq5zJK7Tok2sC3V.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1"
];

export default class DetailTopupMobile extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            hasName: null,
            loading: true,
            loader: true,
            device_token: '',
            isTablet: false,
            scanType: false,
            bannerimg: [
                require('../../../../../assets/images/Banner.png'),
                require('../../../../../assets/images/Banner11.png'),
                require('../../../../../assets/images/Banner12.png'),
            ],
            TextInputFullname: '',
            ErrorFullname: false,
        }

        type = this.props.navigation.getParam('type')
    }

    componentDidMount() {
        this.getPermissionCamera()
        // console.log('type', type)
    }

    async getPermissionCamera() {
        const { status } = await Permissions.getAsync(Permissions.CAMERA);
        if (status !== 'granted') {
            await Permissions.askAsync(Permissions.CAMERA);
            console.log('CAMERA for not enabled.');
        } else {
            console.log(status + 'CAMERA enabled');
        }
    }

    onBarCodeRead = (scanResult) => {
        console.log(scanResult)
    }

    onEnterTextFirstname = (TextInputValue) => {
        if (TextInputValue.trim() != 0) {
            this.setState({ TextInputFullname: TextInputValue, ErrorFullname: true });
        } else {
            this.setState({ TextInputFullname: TextInputValue, ErrorFullname: false });
        }
    }

    check(item) {
        if (this.state.ErrorFullname == false) {
            alert('กรุณากรอกหมายเลขโทรศัพท์')
        } else {
            this.props.navigation.navigate('CheckOutTopupMobile',{type: type, price: item.price})
        }

    }


    render() {
        const data = [
            { price: '10', displayprice: 'ชำระ ฿10.00', value: 'Tamil' },
            { price: '20', displayprice: 'ชำระ ฿20.00', value: 'ชำระ ฿10.00' },
            { price: '30', displayprice: 'ชำระ ฿30.00', value: 'ชำระ ฿10.00' },
            { price: '40', displayprice: 'ชำระ ฿40.00', value: 'ชำระ ฿10.00' },
            { price: '50', displayprice: 'ชำระ ฿50.00', value: 'ชำระ ฿10.00' },
            { price: '60', displayprice: 'ชำระ ฿60.00', value: 'ชำระ ฿10.00' },
            { price: '100', displayprice: 'ชำระ ฿100.00', value: 'ชำระ ฿10.00' },
            { price: '150', displayprice: 'ชำระ ฿150.00', value: 'ชำระ ฿10.00' },
            { price: '200', displayprice: 'ชำระ ฿200.00', value: 'ชำระ ฿10.00' },
            { price: '250', displayprice: 'ชำระ ฿250.00', value: 'ชำระ ฿10.00' },
            { price: '300', displayprice: 'ชำระ ฿300.00', value: 'ชำระ ฿10.00' },
            { price: '350', displayprice: 'ชำระ ฿350.00', value: 'ชำระ ฿10.00' },
            { price: '400', displayprice: 'ชำระ ฿400.00', value: 'ชำระ ฿10.00' },
            { price: '450', displayprice: 'ชำระ ฿450.00', value: 'ชำระ ฿10.00' },
            { price: '500', displayprice: 'ชำระ ฿500.00', value: 'ชำระ ฿10.00' },
        ]
        if (type == 'AIS') {
            logo = require('../../../../../assets/images/icon_topup/ais-01.png')
            title = "AIS 1-2-Call!"
            title2 = "AIS"
        } else if (type == 'DTAC') {
            logo = require('../../../../../assets/images/icon_topup/dtac-01.png')
            title = "Dtac Prepaid"
            title2 = "Dtac"
        } else if (type == 'TRUE') {
            logo = require('../../../../../assets/images/icon_topup/true-01.png')
            title = "TrueMove H"
            title2 = "TrueMove H"
        } else if (type == 'PEN') {
            logo = require('../../../../../assets/images/icon_topup/penguin-01.png')
            title = "Penguin"
            title2 = "Penguin"
        } else if (type == 'CAT') {
            logo = require('../../../../../assets/images/icon_topup/cat-01.png')
            title = "CAT"
            title2 = "CAT"
        }
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                        style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 10, marginLeft: 10 }}>
                        <Images
                            width={width * .1}
                            source={logo}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>{title}</Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
                    <View style={{ padding: 20 }}>
                        <TextInput
                            onChangeText={TextInputValue => this.onEnterTextFirstname(TextInputValue)}
                            placeholder={'หมายเลขโทรศัพท์'}
                            style={{ fontFamily: 'sukhumvit-set' }}
                            underlineColorAndroid={'transparent'}
                            numberOfLines={1}
                            keyboardType={'phone-pad'}
                            returnKeyType={"done"}
                            maxLength={10}

                        />
                        {this.state.ErrorFullname == false ? (
                            <Text style={styles.errorMessage}>
                                กรุณากรอกหมายเลขโทรศัพท์
                            </Text>
                        ) : null}
                    </View>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
                    <View style={{ padding: 20 }}>
                        <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), }}>{title2} เบอร์เติมเงิน (฿)</Text>
                        <ReactNativeItemSelect
                            data={data}
                            countPerRow={3}
                            itemComponent={
                                item => (
                                    <View style={{ alignItems: 'center', padding: 10, margin: -10 }}>
                                        <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.8%') }}>{item.price}</Text>
                                        <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.4%') }}>{item.displayprice}</Text>
                                    </View>
                                )
                            }
                            floatSubmitBtn={true}
                            submitBtnTitle='ถัดไป'
                            lastRowMargin={60}
                            styles={
                                {
                                    btn: { backgroundColor: '#03DAC6', },
                                    disabledBtn: { backgroundColor: '#ccc' },
                                    tickTxt: { backgroundColor: '#03DAC6' },
                                    btnTxt: { fontFamily: 'sukhumvit-set', fontSize: hp('2.4%') },
                                    activeItemBoxHighlight: { borderColor: '#03DAC6' },
                                }
                            }
                            onSubmit={item => this.check(item)}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontFamily: 'sukhumvit-set',
    },
});
