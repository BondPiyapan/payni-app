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
    StatusBar
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

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const images = [
    "http://img.qdaily.com/article/banner/20170801113352Nruq7ySUiAh8e3L1.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
    "http://img.qdaily.com/article/banner/201707312210334UMcDGil9SnKWh1o.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
    "http://img.qdaily.com/article/banner/20170731145444Awq5zJK7Tok2sC3V.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1"
];

export default class MainPayBill extends React.Component {


    constructor() {
        super()
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
            ]
        }
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


    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Carousel
                        autoplay
                        loop
                        index={0}
                        pageSize={width}
                    >
                        {this.state.bannerimg.map((image, index) => {
                            return (
                                <View style={{ alignItems: 'center' }} key={index}>
                                    <Images
                                        width={width}
                                        source={image}
                                    />
                                </View>
                            );
                        })}
                    </Carousel>
                    <View>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('CreditcardPayBillDetail')}
                            style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 10, marginLeft: 10 }}>
                            <Images
                                width={width * .1}
                                source={require('../../../../../assets/images/icon_paybill/credit-card.png')}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>บิลค่าบัตรเครดิต / สินเชื่อ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', marginBottom: hp('1%') }} />
                    <View>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('UtilitiesPayBillDetail')}
                            style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 10, marginLeft: 10 }}>
                            <Images
                                width={width * .1}
                                source={require('../../../../../assets/images/icon_paybill/plug.png')}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>บิลค่าน้ำ ค่าไฟ และภาษี</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', marginBottom: hp('1%') }} />
                    <View>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('TelePayBillDetail')}
                            style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 10, marginLeft: 10 }}>
                            <Images
                                width={width * .1}
                                source={require('../../../../../assets/images/icon_paybill/phone-call.png')}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>บิลโทรคมนาคม</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', marginBottom: hp('1%') }} />
                    <View>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('InsurePayBillDetail')}
                            style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 10, marginLeft: 10 }}>
                            <Images
                                width={width * .1}
                                source={require('../../../../../assets/images/icon_paybill/insurance.png')}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>บิลประกัน และประกันสังคม</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', marginBottom: hp('1%') }} />
                    <View>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('LeasingPayBillDetail')}
                            style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 10, marginLeft: 10 }}>
                            <Images
                                width={width * .1}
                                source={require('../../../../../assets/images/icon_paybill/rent.png')}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>บิลลิสซิ่ง</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', marginBottom: hp('1%') }} />
                    <View>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('EstatePayBillDetail')}
                            style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 10, marginLeft: 10 }}>
                            <Images
                                width={width * .1}
                                source={require('../../../../../assets/images/icon_paybill/housing.png')}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>บิลอสังหาริมทรัพย์</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', marginBottom: hp('1%') }} />
                    <View>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('EduPayBillDetail')}
                            style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 10, marginLeft: 10 }}>
                            <Images
                                width={width * .1}
                                source={require('../../../../../assets/images/icon_paybill/mortarboard.png')}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>บิลการศึกษา</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', marginBottom: hp('1%') }} />
                    <View>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('OtherPayBillDetail')}
                            style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 10, marginLeft: 10 }}>
                            <Images
                                width={width * .1}
                                source={require('../../../../../assets/images/icon_paybill/other.png')}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>บิลอื่นๆ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', marginBottom: hp('1%') }} />

                </ScrollView>
                <View style={{
                    borderColor: '#fff', flexDirection: 'row',
                    padding: 20
                }}>
                    <TouchableOpacity style={{ flex: 0.5, alignItems: 'center' }}>
                        <Images
                            width={width * .1}
                            source={require('../../../../../assets/images/icon_paybill/barcode.png')}
                        />
                        <Text style={{
                            color: '#000',
                            fontSize: hp('1.8%'),
                            fontFamily: 'sukhumvit-set',
                        }}>สแกนบาร์โค้ด</Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            marginVertical: 1,
                            borderLeftWidth: 1,
                            borderLeftColor: '#ccc',
                        }}
                    />
                    <TouchableOpacity style={{ flex: 0.5, alignItems: 'center' }}>
                        <Images
                            width={width * .1}
                            source={require('../../../../../assets/images/icon_paybill/bill2.png')}
                        />
                        <Text style={{
                            color: '#000',
                            fontSize: hp('1.8%'),
                            fontFamily: 'sukhumvit-set',
                        }}>ค้นหาบิล</Text>
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
});
