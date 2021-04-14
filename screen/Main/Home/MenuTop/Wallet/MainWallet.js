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
    Modal
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

export default class MainWallet extends React.Component {


    constructor() {
        super()
        this.state = {
            hasName: null,
            loading: true,
            loader: true,
            device_token: '',
            isTablet: false,
            scanType: false,
            showAddBank: false
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

    showAddBank() {
        return (
            <Modal
                visible={this.state.showAddBank}
                transparent={true}
            >
                <View style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.30)',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <View style={{
                        backgroundColor: '#fff', width: width,
                    }}>
                        <View style={{ flexDirection: 'row', alignItems:'center', padding: hp('2%'), justifyContent:'center' }}>
                            <TouchableOpacity onPress={()=> this.setState({
                                showAddBank: false
                            })}
                            style={{ position: 'absolute', left: hp('2%') }}>
                            <Icon.Entypo  name="chevron-small-left" size={hp('4.5%')} color="#ccc" />
                            </TouchableOpacity>
                            <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.2%')}}>เลือกประเภท</Text>
                        </View>
                        <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
                        <TouchableOpacity onPress={()=> {this.props.navigation.navigate('MainAddBank'),this.setState({
                                showAddBank: false
                            })}}
                        style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 12 }}>
                        <Images
                            width={width * .07}
                            source={require('../../../../../assets/images/icon_bank/128_bank.png')}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>บัญชีธนาคาร</Text>
                        </View>
                        <Icon.Entypo style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%') }} name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
                    </TouchableOpacity>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
                    <TouchableOpacity onPress={()=> {this.props.navigation.navigate('MainAddCreditCard'),this.setState({
                                showAddBank: false
                            })}}
                        style={{ width: width, alignItems: 'center', flexDirection: 'row', padding: 12 }}>
                        <Images
                            width={width * .07}
                            source={require('../../../../../assets/images/icon_paybill/credit-card.png')}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>บัตรเครดิต/เดบิต</Text>
                        </View>
                        <Icon.Entypo style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('2%') }} name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
                    </TouchableOpacity>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', }} />
                    </View>

                </View>
            </Modal>
        )
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#03DAC6', paddingBottom: 30 }}>
                    <View style={{ alignItems: 'center', marginTop: 30 }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: hp('2.2%'),
                            fontFamily: 'sukhumvit-set',
                        }}>ยอดเงินในวอลเล็ท</Text>
                        <Text style={{
                            color: '#fff',
                            fontSize: hp('6%'),
                            fontFamily: 'sukhumvit-set',
                        }}>0.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ flex: 0.5, alignItems: 'center' }}>
                            <Text style={{
                                color: '#fff',
                                fontSize: hp('1.8%'),
                                fontFamily: 'sukhumvit-set',
                            }}>กระเป๋าหลัก</Text>
                            <Text style={{
                                color: '#fff',
                                fontSize: hp('3%'),
                                fontFamily: 'sukhumvit-set',
                            }}>0.00</Text>
                        </View>
                        <View style={{ flex: 0.5, alignItems: 'center' }}>
                            <Text style={{
                                color: '#fff',
                                fontSize: hp('1.8%'),
                                fontFamily: 'sukhumvit-set',
                            }}>โบนัส</Text>
                            <Text style={{
                                color: '#fff',
                                fontSize: hp('3%'),
                                fontFamily: 'sukhumvit-set',
                            }}>0.00</Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#07c3b2', marginBottom: hp('1%'), margin: 20 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 20, marginTop: 20 }}>
                        <TouchableOpacity
                            style={{ alignItems: 'center', flex: 2.5 }}>
                            <Images
                                width={width * .08}
                                source={require('../../../../../assets/images/icon_wallet/topup-payni.png')}
                            />
                            <Text style={{
                                color: '#fff',
                                fontSize: hp('2.2%'),
                                marginTop: hp('1%'),
                                fontFamily: 'sukhumvit-set',
                            }}>เติมเงิน</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ alignItems: 'center', flex: 2.5 }}>
                            <Images
                                width={width * .08}
                                source={require('../../../../../assets/images/icon_wallet/withdraw-payni.png')}
                            />
                            <Text style={{
                                color: '#fff',
                                fontSize: hp('2.2%'),
                                marginTop: hp('1%'),
                                fontFamily: 'sukhumvit-set',
                            }}>ถอน</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ alignItems: 'center', flex: 2.5 }}>
                            <Images
                                width={width * .08}
                                source={require('../../../../../assets/images/icon_wallet/transfer-payni.png')}
                            />
                            <Text style={{
                                color: '#fff',
                                fontSize: hp('2.2%'),
                                marginTop: hp('1%'),
                                fontFamily: 'sukhumvit-set',
                            }}>โอน</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ alignItems: 'center', flex: 2.5 }}>
                            <Images
                                width={width * .08}
                                source={require('../../../../../assets/images/icon_wallet/clock-payni.png')}
                            />
                            <Text style={{
                                color: '#fff',
                                fontSize: hp('2.2%'),
                                marginTop: hp('1%'),
                                fontFamily: 'sukhumvit-set',
                            }}>รายการ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: 80 }}>
                    <TouchableOpacity onPress={()=> this.setState({
                                showAddBank: true
                            })}
                    style={{ paddingVertical: 10, paddingHorizontal: 40, backgroundColor: '#cef4f1', flexDirection: 'row', alignItems: 'center', borderRadius: 5 }}>
                        <Icon.AntDesign
                            size={hp('4%')}
                            name="plus"
                            color="#03DAC6"
                        />
                        <Text style={{
                            color: '#03DAC6',
                            fontSize: hp('2.2%'),
                            fontFamily: 'sukhumvit-set',
                        }}>   เพิ่มบัตรธนาคาร</Text>
                    </TouchableOpacity>
                    <Text style={{
                        color: '#ccc',
                        fontSize: hp('1.8%'),
                        marginTop: 10,
                        fontFamily: 'sukhumvit-set',
                    }}>ผูกบัญชีธนาคาร หรือ บัตรเครดิต/เดบิต เพื่อรับสิทธิ</Text>
                    <Text style={{
                        color: '#ccc',
                        fontSize: hp('1.8%'),
                        fontFamily: 'sukhumvit-set',
                    }}>พิเศษกับ PayNi</Text>
                </View>
                {this.showAddBank()}
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
