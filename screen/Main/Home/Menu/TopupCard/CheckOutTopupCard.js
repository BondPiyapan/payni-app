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
    TextInput,
    Switch
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

export default class CheckOutTopupCard extends React.Component {


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
        price = this.props.navigation.getParam('price')
    }

    componentDidMount() {
        this.getPermissionCamera()
        console.log('type', type)
        console.log('price', price)
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

    check() {
        if (this.state.ErrorFullname == false) {
            alert('กรุณากรอกหมายเลขโทรศัพท์')
        } else {
            alert('Go')
        }

    }


    render() {
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
        } else if (type == 'TOT') {
            logo = require('../../../../../assets/images/icon_topup/tot.png')
            title = "TOT"
            title2 = "TOT"
        } else if (type == 'ITUNE') {
            logo = require('../../../../../assets/images/icon_topup/itune.jpg')
            title = "iTune"
            title2 = "iTune"
        }
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View onPress={() => this.props.navigation.navigate('DetailTopupMobile')}
                        style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 10, marginLeft: 10 }}>
                        <Images
                            width={width * .1}
                            source={logo}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>{title} {price} - PayNi DP</Text>
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.8%'), marginLeft: hp('3%'), color: '#03DAC6' }}>฿ {price}.00</Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
                    <View>
                        <TouchableOpacity
                            style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 12 }}>
                            <Images
                                width={width * .1}
                                source={require('../../../../../assets/images/payni-coupon.png')}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>คูปอง</Text>
                            </View>
                            <Icon.Entypo style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%') }} name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
                    <View>
                        <TouchableOpacity
                            style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 12 }}>
                            <Images
                                width={width * .1}
                                source={require('../../../../../assets/images/scoin.png')}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>ใช้ Coins</Text>
                            </View>
                            <View style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%') }}>
                                <Switch />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
                    <View>
                        <TouchableOpacity
                            style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 12 }}>
                            <Images
                                width={width * .05}
                                source={require('../../../../../assets/images/icon_menu/wallet.png')}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2%'), marginLeft: hp('3%') }}>ยอดเงินในวอลเล็ท(฿ 0.00)</Text>
                                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.6%'), marginLeft: hp('3%'), color: '#ccc' }}>ใช้ 1.00 Coins - ฿ 1.00</Text>
                                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.6%'), marginLeft: hp('3%'), color: '#999' }}>ยอดเงินในวอลเล็ทไม่เพียงพอ</Text>
                            </View>
                            <View style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%') }}>
                                <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2%'), marginLeft: hp('3%') }}>฿ 0.00</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={{alignItems:'center'}}>
                    <View style={{
                        borderColor: '#fff', flexDirection: 'row',
                        paddingHorizontal: 20
                    }}>
                        <View style={{ flex: 0.5, alignItems: 'flex-start' }}>
                            <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2%') }}>ทั้งหมด</Text>
                        </View>
                        <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.8%') }}>฿ {price}.00</Text>
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), color: '#e3bb1c' }}>ได้รับ 12.50 Coins</Text>
                        </View>
                    </View>
                    <TouchableOpacity disabled={true} style={{ backgroundColor: '#ccc', padding: 8, width: width * .9, alignItems: 'center', borderRadius: 5, marginBottom: 20 }}>
                        <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), color: '#fff' }}>ชำระเงิน</Text>
                    </TouchableOpacity>
                </View>
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
