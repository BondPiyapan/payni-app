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

export default class MainScan extends React.Component {


    constructor() {
        super()
        this.state = {
            hasName: null,
            loading: true,
            loader: true,
            device_token: '',
            isTablet: false,
            scanType: false,
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
                <Camera onBarCodeScanned={this.onBarCodeRead} style={{ flex: 1 }}>
                    <View style={{ marginTop: Constants.statusBarHeight, flex: 1, zIndex: 10 }}>
                        <View style={{ alignItems: 'center', marginTop: 50, flex: 1, zIndex: 10, }}>
                            <Text style={{
                                color: '#fff',
                                fontSize: hp('2.2%'),
                                fontFamily: 'sukhumvit-set',
                            }}>สแกนบาร์โค้ด / รหัส QR ที่นี่</Text>
                        </View>
                    </View>
                    {this.state.scanType == true ?
                        <BarcodeMask height={100} width={width * .9} edgeBorderWidth={1} lineAnimationDuration={700} showAnimatedLine={false} />
                        :
                        <BarcodeMask height={300} edgeBorderWidth={1} lineAnimationDuration={1000} showAnimatedLine={false} />
                    }
                    <View style={{ alignItems: 'center', marginBottom: 100 }}>
                        {this.state.scanType == true ?
                            <TouchableOpacity onPress={() => this.setState({
                                scanType: false
                            })}
                                style={{ padding: 10, borderRadius: 20, borderColor: '#fff', borderWidth: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: hp('2.2%'),
                                    fontFamily: 'sukhumvit-set',
                                }}>เปลี่ยนเป็น แสกน  </Text>
                                <Icon.Fontisto
                                    size={hp('2%')}
                                    name="qrcode"
                                    color="#fff"
                                />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => this.setState({
                                scanType: true
                            })}
                                style={{ padding: 10, borderRadius: 20, borderColor: '#fff', borderWidth: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: hp('2.2%'),
                                    fontFamily: 'sukhumvit-set',
                                }}>เปลี่ยนเป็น แสกน </Text>
                                <Icon.MaterialCommunityIcons
                                    size={hp('3%')}
                                    name="barcode"
                                    color="#fff"
                                />
                            </TouchableOpacity>
                        }
                        <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                            <Text style={{
                                color: '#fff',
                                marginTop: 10,
                                fontSize: hp('2.6%'),
                                fontFamily: 'sukhumvit-set',
                            }}>ปิด</Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
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
