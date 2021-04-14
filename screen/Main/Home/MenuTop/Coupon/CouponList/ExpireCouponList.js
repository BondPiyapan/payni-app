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
    StatusBar,
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

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const images = [
    "http://img.qdaily.com/article/banner/20170801113352Nruq7ySUiAh8e3L1.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
    "http://img.qdaily.com/article/banner/201707312210334UMcDGil9SnKWh1o.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
    "http://img.qdaily.com/article/banner/20170731145444Awq5zJK7Tok2sC3V.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1"
];

export default class ExpireCouponList extends React.Component {

    // static navigationOptions = ({ navigation }) => {
    //     const { params = {} } = navigation.state
    //     return {
    //         headerRight: () =>
    //             <TouchableOpacity style={[{ paddingHorizontal: 15 }]}
    //                 onPress={() => params.goHome()}>
    //                 <Images
    //                     width={width * .07}
    //                     source={require('../../../../../../assets/images/payni-coupon_x.png')}
    //                 />
    //             </TouchableOpacity>,
    //     }


    // };


    constructor(props) {
        super(props)
        this.state = {
            hasName: null,
            loading: true,
            loader: true,
            device_token: '',
            isTablet: false,
            scanType: false,
            enterCoupon: ''
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({ goHome: this.goHome })
    }

    goHome = () => {
        alert('click')
    }

    onEnterText = (TextInputValue) => {

        if (TextInputValue.trim() != 0) {
            this.setState({ enterCoupon: TextInputValue });
        } else {
            this.setState({ enterCoupon: '' });
        }
    }


    render() {
        return (
            <View style={styles.container}>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ alignItems: 'center', padding: 20 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailCouponList', { typeCoupon: 'expire' })}
                            style={{
                                backgroundColor: '#fff',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 0.5,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 1,

                                elevation: 3,
                                padding: hp('2.4%'),
                                width: width * .9,
                            }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 0.1, justifyContent: 'center' }}>
                                    <Images
                                        width={width * .1}
                                        source={require('../../../../../../assets/images/payni-coupon_x.png')}
                                    />
                                </View>
                                <View style={{ flex: 0.6 }}>
                                    <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>[ของขวัญต้อนรับ] คูปองเงินคืน 100% Coins</Text>
                                    <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.6%'), marginLeft: hp('3%'), color: '#ccc' }}>สามารถใช้ได้เฉพาะการเติมเงินครั้งแรกใน PayNi เท่านั้น</Text>
                                </View>
                                <View style={{ flex: 0.3, alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('3%'), marginLeft: hp('3%') }}>100 %</Text>
                                </View>
                            </View>
                            <View style={{ height: 1, backgroundColor: '#CED7DE', marginVertical: hp('2%') }} />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 0.7, justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.8%'), color: '#ccc' }}>01 ม.ค. 2564 ถึง 31 ม.ค. 2564</Text>
                                </View>
                                <View style={{ flex: 0.3, alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.8%'), color: '#ccc' }}>หมดอายุแล้ว</Text>
                                </View>
                            </View>
                            <View>

                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', padding: 20 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailCouponList', { typeCoupon: 'expire' })} style={{
                            backgroundColor: '#fff',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 0.5,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 1,

                            elevation: 3,
                            padding: hp('2.4%'),
                            width: width * .9,
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 0.1, justifyContent: 'center' }}>
                                    <Images
                                        width={width * .1}
                                        source={require('../../../../../../assets/images/payni-coupon_x.png')}
                                    />
                                </View>
                                <View style={{ flex: 0.6 }}>
                                    <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>[ของขวัญต้อนรับ] คูปองเงินคืน 30% Coins</Text>
                                    <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.6%'), marginLeft: hp('3%'), color: '#ccc' }}>สามารถใช้ได้เฉพาะการเติมเงินครั้งแรกใน PayNi เท่านั้น</Text>
                                </View>
                                <View style={{ flex: 0.3, alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('3%'), marginLeft: hp('3%') }}>30 %</Text>
                                </View>
                            </View>
                            <View style={{ height: 1, backgroundColor: '#CED7DE', marginVertical: hp('2%') }} />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 0.7, justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.8%'), color: '#ccc' }}>01 ม.ค. 2564 ถึง 31 ม.ค. 2564</Text>
                                </View>
                                <View style={{ flex: 0.3, alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.8%'), color: '#ccc' }}>หมดอายุแล้ว</Text>
                                </View>
                            </View>
                            <View>

                            </View>
                        </TouchableOpacity>
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
