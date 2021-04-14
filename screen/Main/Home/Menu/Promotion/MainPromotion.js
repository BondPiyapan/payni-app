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

export default class MainPromotion extends React.Component {


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
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Images
                        width={width}
                        source={require('../../../../../assets/images/Banner6.png')}
                    />
                    <View style={{ padding: 20, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <View style={{
                                flex: 0.5, alignItems: 'center', backgroundColor: '#fff', elevation: 3, paddingVertical: 20,
                                marginHorizontal: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 2,
                                borderRadius: 15
                            }}>
                                <Images
                                    width={width * .2}
                                    source={require('../../../../../assets/images/icon_menu/bill.png')}
                                />
                                <Text style={{
                                    color: '#000',
                                    marginTop: hp('2%'),
                                    fontSize: hp('2%'),
                                    fontFamily: 'sukhumvit-set-bold',
                                }}>จ่ายบิล</Text>
                                <TouchableOpacity style={{
                                    paddingVertical: 5,
                                    paddingHorizontal: 25,
                                    backgroundColor: '#03DAC6',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    marginTop: hp('2%'),
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        fontSize: hp('2.2%'),
                                        fontFamily: 'sukhumvit-set',
                                    }}>คลิกเลย</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                flex: 0.5, alignItems: 'center', backgroundColor: '#fff', elevation: 3, paddingVertical: 20,
                                marginHorizontal: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 2,
                                borderRadius: 15
                            }}>
                                <Images
                                    width={width * .2}
                                    source={require('../../../../../assets/images/icon_menu/smartphone.png')}
                                />
                                <Text style={{
                                    color: '#000',
                                    marginTop: hp('2%'),
                                    fontSize: hp('2%'),
                                    fontFamily: 'sukhumvit-set-bold',
                                }}>เติมเงินมือถือ</Text>
                                <TouchableOpacity style={{
                                    paddingVertical: 5,
                                    paddingHorizontal: 25,
                                    backgroundColor: '#03DAC6',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    marginTop: hp('2%'),
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        fontSize: hp('2.2%'),
                                        fontFamily: 'sukhumvit-set',
                                    }}>คลิกเลย</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                            <View style={{
                                flex: 0.5, alignItems: 'center', backgroundColor: '#fff', elevation: 3, paddingVertical: 20,
                                marginHorizontal: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 2,
                                borderRadius: 15
                            }}>
                                <Images
                                    width={width * .2}
                                    source={require('../../../../../assets/images/icon_menu/game-console.png')}
                                />
                                <Text style={{
                                    color: '#000',
                                    marginTop: hp('2%'),
                                    fontSize: hp('2%'),
                                    fontFamily: 'sukhumvit-set-bold',
                                }}>เติมเกม</Text>
                                <TouchableOpacity style={{
                                    paddingVertical: 5,
                                    paddingHorizontal: 25,
                                    backgroundColor: '#03DAC6',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    marginTop: hp('2%'),
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        fontSize: hp('2.2%'),
                                        fontFamily: 'sukhumvit-set',
                                    }}>คลิกเลย</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                flex: 0.5, alignItems: 'center', backgroundColor: '#fff', elevation: 3, paddingVertical: 20,
                                marginHorizontal: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 2,
                                borderRadius: 15
                            }}>
                                <Images
                                    width={width * .2}
                                    source={require('../../../../../assets/images/icon_menu/prepaid-card.png')}
                                />
                                <Text style={{
                                    color: '#000',
                                    marginTop: hp('2%'),
                                    fontSize: hp('2%'),
                                    fontFamily: 'sukhumvit-set-bold',
                                }}>Payni Card</Text>
                                <TouchableOpacity style={{
                                    paddingVertical: 5,
                                    paddingHorizontal: 25,
                                    backgroundColor: '#03DAC6',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    marginTop: hp('2%'),
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        fontSize: hp('2.2%'),
                                        fontFamily: 'sukhumvit-set',
                                    }}>คลิกเลย</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                            <View style={{
                                flex: 0.5, alignItems: 'center', backgroundColor: '#fff', elevation: 3, paddingVertical: 20,
                                marginHorizontal: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 2,
                                borderRadius: 15
                            }}>
                                <Images
                                    width={width * .2}
                                    source={require('../../../../../assets/images/icon_paybill/barcode.png')}
                                />
                                <Text style={{
                                    color: '#000',
                                    marginTop: hp('2%'),
                                    fontSize: hp('2%'),
                                    fontFamily: 'sukhumvit-set-bold',
                                }}>สแกนจ่าย</Text>
                                <TouchableOpacity style={{
                                    paddingVertical: 5,
                                    paddingHorizontal: 25,
                                    backgroundColor: '#03DAC6',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    marginTop: hp('2%'),
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        fontSize: hp('2.2%'),
                                        fontFamily: 'sukhumvit-set',
                                    }}>คลิกเลย</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                flex: 0.5, alignItems: 'center', backgroundColor: '#fff', elevation: 3, paddingVertical: 20,
                                marginHorizontal: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 2,
                                borderRadius: 15
                            }}>
                                <Images
                                    width={width * .2}
                                    source={require('../../../../../assets/images/icon_menu/other-128.png')}
                                />
                                <Text style={{
                                    color: '#000',
                                    marginTop: hp('2%'),
                                    fontSize: hp('2%'),
                                    fontFamily: 'sukhumvit-set-bold',
                                }}>อื่นๆ</Text>
                                <TouchableOpacity style={{
                                    paddingVertical: 5,
                                    paddingHorizontal: 25,
                                    backgroundColor: '#03DAC6',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    marginTop: hp('2%'),
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        fontSize: hp('2.2%'),
                                        fontFamily: 'sukhumvit-set',
                                    }}>คลิกเลย</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
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
});
