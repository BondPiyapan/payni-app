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

export default class MainPackageMobile extends React.Component {


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
            ],
            dataGrid: [
                {
                    id: 1,
                    name: 'โปรโมชัน',
                    src: require('../../../../../assets/images/icon_menu/promotion_payni.png'),
                    screen: 'MainPromotion'
                },
                {
                    id: 2,
                    name: 'แพ็กเกจเสริม',
                    src: require('../../../../../assets/images/icon_menu/network.png'),
                    screen: 'MainPackageMobile'
                },
                {
                    id: 3,
                    name: 'เติมเงินมือถือ',
                    src: require('../../../../../assets/images/icon_menu/smartphone.png'),
                    screen: 'MainTopupMobile'
                },
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
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 0.33, alignItems: 'center', borderRightWidth: 1, borderBottomWidth: 1, padding: 20, borderColor: '#ccc' }}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailTopupCard', {type: 'AIS'})}
                        style={{alignItems:'center'}}>
                            <Images
                                width={width * .15}
                                source={require('../../../../../assets/images/icon_topup/ais-01.png')}
                            />
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.6%'), textAlign:'center' }}>บัตรเงินสด เอไอเอส วัน-ทู-คอล!</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.33, alignItems: 'center', borderRightWidth: 1, borderBottomWidth: 1, padding: 20, borderColor: '#ccc' }}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailTopupCard', {type: 'TRUE'})}
                        style={{alignItems:'center'}}>
                            <Images
                                width={width * .15}
                                source={require('../../../../../assets/images/icon_topup/true-01.png')}
                            />
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.6%'), textAlign:'center' }}>บัตรเงินสด ทรูมันนี่</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.33, alignItems: 'center', borderBottomWidth: 1, padding: 20, borderColor: '#ccc' }}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailTopupCard', {type: 'DTAC'})}
                        style={{alignItems:'center'}}>
                            <Images
                                width={width * .15}
                                source={require('../../../../../assets/images/icon_topup/dtac-01.png')}
                            />
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.6%'), textAlign:'center' }}>บัตรเงินสด ดีแทค</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 0.33, alignItems: 'center', borderRightWidth: 1, borderBottomWidth: 1, padding: 20, borderColor: '#ccc' }}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailTopupCard', {type: 'TOT'})}
                        style={{alignItems:'center'}}>
                            <Images
                                width={width * .15}
                                source={require('../../../../../assets/images/icon_topup/tot.png')}
                            />
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.6%'), textAlign:'center' }}>บัตรเงินสด ทีโอที</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.33, alignItems: 'center', borderRightWidth: 1, borderBottomWidth: 1, padding: 20, borderColor: '#ccc' }}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailTopupCard', {type: 'ITUNE'})}
                        style={{alignItems:'center'}}>
                            <Images
                                width={width * .15}
                                source={require('../../../../../assets/images/icon_topup/itune.jpg')}
                            />
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.6%'), textAlign:'center' }}>บัตรของขวัญไอทูนส์</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.33, alignItems: 'center', borderBottomWidth: 1, padding: 20, borderColor: '#ccc' }}>


                    </View>
                </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
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
