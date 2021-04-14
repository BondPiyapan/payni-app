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
    FlatList
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

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const images = [
    "http://img.qdaily.com/article/banner/20170801113352Nruq7ySUiAh8e3L1.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
    "http://img.qdaily.com/article/banner/201707312210334UMcDGil9SnKWh1o.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
    "http://img.qdaily.com/article/banner/20170731145444Awq5zJK7Tok2sC3V.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1"
];

export default class MainNotipromo extends React.Component {


    constructor() {
        super()
        this.state = {
            hasName: null,
            loading: true,
            loader: true,
            device_token: '',
            isTablet: false,
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={{ padding: 40 }}>
                        <View style={{ alignItems: 'center', }}>
                            <Images
                                width={width * .8}
                                source={require('../../../../assets/images/Banner4.png')}
                            />

                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.2%') }}>ยิ่งซื้อเพรชเยอะยิ่งได้เย๊อะ</Text>
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%') }}>สาวก BIGO Live มีเฮ ❤️ ยิ่งซื้อเพชรเยอะยิ่งได้เยอะ 😍
                            ผู้ใช้ที่ซื้อเพชร BIGO Live ผ่าน PayNi สูงสุด 20 ท่าน 💎
                            📆 ระหว่างวันที่ 18 พฤศจิกายน - 2 ธันวาคม 2563
รับไปเล้ย ของรางวัลสุดพิเศษ จาก BIGO Live และ PayNi 🧸🎉</Text>
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.8%'), color: '#ccc' }}>21/12/2563 11:34</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', marginBottom: hp('1%'), marginHorizontal: 20 }} />
                    <TouchableOpacity style={{ padding: 40 }}>
                        <View style={{ alignItems: 'center', }}>
                            <Images
                                width={width * .8}
                                source={require('../../../../assets/images/Banner5.png')}
                            />

                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.2%') }}>PayNiรับเงินคืน 100.-</Text>
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%') }}>
                            PayNi รับเงินคืน 100.- เมื่อซื้อของที่ Sahapat_official และจ่ายด้วยบัญชีกรุงไทย ที่ผูกไว้กับPayNi</Text>
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('1.8%'), color: '#ccc' }}>21/12/2563 11:34</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ height: 1, backgroundColor: '#CED7DE', marginBottom: hp('1%'), marginHorizontal: 20 }} />
                </ScrollView>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
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
