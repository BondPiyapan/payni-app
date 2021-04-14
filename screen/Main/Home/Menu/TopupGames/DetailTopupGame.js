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

export default class DetailTopupGame extends React.Component {


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
            alert('กรุณากรอกบัญชีเกมของคุณ')
        } else {
            this.props.navigation.navigate('CheckOutTopupGame',{type: type, price: item.price})
        }

    }


    render() {
        const data = [
            { price: '100', displayprice: 'ชำระ ฿100.00', value: 'Tamil' },
            { price: '200', displayprice: 'ชำระ ฿200.00', value: 'ชำระ ฿10.00' },
            { price: '300', displayprice: 'ชำระ ฿300.00', value: 'ชำระ ฿10.00' },
            { price: '400', displayprice: 'ชำระ ฿400.00', value: 'ชำระ ฿10.00' },
            { price: '500', displayprice: 'ชำระ ฿500.00', value: 'ชำระ ฿10.00' },
            { price: '1000', displayprice: 'ชำระ ฿1000.00', value: 'ชำระ ฿10.00' },
        ]
        if (type == 'FIFA') {
            logo = require('../../../../../assets/images/icon_topup/fifa.png')
            title = "Fifa online 4"
            title2 = "Fifa online 4"
        } else if (type == 'LOL') {
            logo = require('../../../../../assets/images/icon_topup/LOL.png')
            title = "League of legends"
            title2 = "League of legends"
        } else if (type == 'ROV') {
            logo = require('../../../../../assets/images/icon_topup/rov-01.png')
            title = "ROV"
            title2 = "ROV"
        } else if (type == 'LOLW') {
            logo = require('../../../../../assets/images/icon_topup/wildrift.jpg')
            title = "League of legends: Wild rift"
            title2 = "League of legends: Wild rift"
        } else if (type == 'PSS') {
            logo = require('../../../../../assets/images/icon_topup/playstation.png')
            title = "PlayStation"
            title2 = "PlayStation"
        } else if (type == 'PSP') {
            logo = require('../../../../../assets/images/icon_topup/ps-plus.png')
            title = "PlayStation®Plus"
            title2 = "PlayStation®Plus"
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
                            placeholder={'บัญชีเกมของคุณ'}
                            style={{ fontFamily: 'sukhumvit-set' }}
                            underlineColorAndroid={'transparent'}
                            numberOfLines={1}
                            returnKeyType={"done"}
                            maxLength={10}

                        />
                        {this.state.ErrorFullname == false ? (
                            <Text style={styles.errorMessage}>
                                กรุณากรอกบัญชีเกมของคุณ
                            </Text>
                        ) : null}
                    </View>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
                    <View style={{ padding: 20 }}>
                        <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), }}>เลือก {title2}</Text>
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
