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

export default class CheckOutTransterBank extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            hasName: null,
            loading: true,
            loader: true,
            device_token: '',
            isTablet: false,
            scanType: false,
            TextInputFullname: '',
            ErrorFullname: false,
        }

        price = this.props.navigation.getParam('price')
        bankSelect = this.props.navigation.getParam('bankSelect')
    }

    componentDidMount() {
        this.getPermissionCamera()
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
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                        style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 10, marginLeft: 10 }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2%'), }}>โอนเงินให้กับบัญชีธนาคาร</Text>
                            <View style={{ flexDirection: 'row', marginTop: hp('1%') }}>
                                <Images
                                    width={width * .07}
                                    source={bankSelect.img}
                                />
                                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('2%') }}>{bankSelect.nameBank}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: hp('1%')  }}>
                                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.4%'), marginLeft: hp('3%') }}>ชื่อบัญชี:</Text>
                                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.4%'), marginLeft: hp('3%') }}>PayNi01</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.4%'), marginLeft: hp('3%') }}>เลขที่บัญชี:</Text>
                                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.4%'), marginLeft: hp('3%') }}>123456789</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
                    <View
                        style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 10, marginLeft: 10 }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2%'), }}>จำนวนเงิน</Text>
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.8%'), marginLeft: hp('3%'), color: '#03DAC6' }}>฿ {price}.00</Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
                    <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%'), color: '#ccc', marginTop: hp('2%') }}>*กรุณาตรวจสอบรายการให้ถูกต้องก่อนทำการโอนเงิน</Text>
                </ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <View style={{
                        borderColor: '#fff', flexDirection: 'row',
                        paddingHorizontal: 20, alignItems: 'center'
                    }}>
                        <View style={{ flex: 0.5, alignItems: 'flex-start' }}>
                            <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2%') }}>ทั้งหมด</Text>
                        </View>
                        <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.8%') }}>฿ {price}.00</Text>

                        </View>
                    </View>
                    <TouchableOpacity disabled={true} style={{ backgroundColor: '#ccc', padding: 8, width: width * .9, alignItems: 'center', borderRadius: 5, marginBottom: 20 }}>
                        <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), color: '#fff' }}>ยืนยัน</Text>
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
