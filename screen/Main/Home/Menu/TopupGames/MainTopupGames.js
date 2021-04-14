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

export default class MainTopupGames extends React.Component {


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
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 0.33, alignItems: 'center', borderRightWidth: 1, borderBottomWidth: 1, padding: 20, borderColor: '#ccc' }}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailTopupGame', {type: 'FIFA'})}
                        style={{alignItems:'center'}}>
                            <Images
                                width={width * .15}
                                source={require('../../../../../assets/images/icon_topup/fifa.png')}
                            />
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.6%'), textAlign:'center' }}>ฟีฟ่า ออนไลน์ 4</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.33, alignItems: 'center', borderRightWidth: 1, borderBottomWidth: 1, padding: 20, borderColor: '#ccc' }}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailTopupGame', {type: 'LOL'})}
                        style={{alignItems:'center'}}>
                            <Images
                                width={width * .15}
                                source={require('../../../../../assets/images/icon_topup/LOL.png')}
                            />
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.6%'), textAlign:'center' }}>แอลโอแอล</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.33, alignItems: 'center', borderBottomWidth: 1, padding: 20, borderColor: '#ccc' }}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailTopupGame', {type: 'ROV'})}
                        style={{alignItems:'center'}}>
                            <Images
                                width={width * .15}
                                source={require('../../../../../assets/images/icon_topup/rov-01.png')}
                            />
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.6%'), textAlign:'center' }}>อาร์โอวี</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 0.33, alignItems: 'center', borderRightWidth: 1, borderBottomWidth: 1, padding: 20, borderColor: '#ccc' }}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailTopupGame', {type: 'LOLW'})}
                        style={{alignItems:'center'}}>
                            <Images
                                width={width * .15}
                                source={require('../../../../../assets/images/icon_topup/wildrift.jpg')}
                            />
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.6%'), textAlign:'center' }}>แอลโอแอล วายริฟ</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.33, alignItems: 'center', borderRightWidth: 1, borderBottomWidth: 1, padding: 20, borderColor: '#ccc' }}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailTopupGame', {type: 'PSS'})}
                        style={{alignItems:'center'}}>
                            <Images
                                width={width * .15}
                                source={require('../../../../../assets/images/icon_topup/playstation.png')}
                            />
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.6%'), textAlign:'center' }}>บัตรเงินสด เพลย์สเตชั่น เน็ตเวิร์ค</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.33, alignItems: 'center', borderBottomWidth: 1, padding: 20, borderColor: '#ccc' }}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailTopupGame', {type: 'PSP'})}
                        style={{alignItems:'center'}}>
                            <Images
                                width={width * .15}
                                source={require('../../../../../assets/images/icon_topup/ps-plus.png')}
                            />
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.6%'), textAlign:'center' }}>บัตรเงินสด เพลย์สเตชั่น พลัส</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 0.33, alignItems: 'center', borderRightWidth: 1, borderBottomWidth: 1, padding: 20, borderColor: '#ccc' }}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Images
                                width={width * .15}
                                source={require('../../../../../assets/images/icon_topup/qa.png')}
                            />
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.6%'), textAlign:'center' }}>How to top up and FAQ</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.33, alignItems: 'center', borderRightWidth: 1, borderBottomWidth: 1, padding: 20, borderColor: '#ccc' }}>

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
