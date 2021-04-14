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
    SafeAreaView,
    BackHandler
} from 'react-native';
import { WebBrowser } from 'expo';
import * as Notifications from 'expo-notifications'
const { height, width } = Dimensions.get('window')
import Images from 'react-native-scalable-image';
import * as Localization from 'expo-localization';
import * as Permissions from 'expo-permissions'
import PhoneInput from "react-native-phone-number-input";
import Constants from 'expo-constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as ImagePicker from 'expo-image-picker';
import ResponsiveImage from "react-native-responsive-image";

export default class CitizenCardVerify extends React.Component {
    // static navigationOptions = ({ navigation }) => ({
    //     header: navigation.state.params ? navigation.state.params.header : undefined
    // });


    constructor() {
        super()
        this.state = {
            switchValue: false,
            image: null,
            imagebase64: null
        }
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick = () => {
        return true;
    };

    componentDidMount() {
        this.getPermissionCamera()
    }

    async getPermissionCamera() {
        const { status } = await Permissions.getAsync(Permissions.CAMERA);
        const { status2 } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            await Permissions.askAsync(Permissions.CAMERA);
            console.log('CAMERA for not enabled.');
        } else {
            console.log(status + 'CAMERA enabled');
        }
        if (status2 !== 'granted') {
            await Permissions.askAsync(Permissions.CAMERA_ROLL);
            console.log('CAMERA for not enabled.');
        } else {
            console.log(status + 'CAMERA enabled');
        }
    }

    _pickImage = async () => {
        this.getPermissionCamera()
        try {
            let result = await ImagePicker.launchCameraAsync({
                quality: 0.2,
                base64: true
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri, imagebase64: result.base64 });
                // console.log('base64', this.state.imagebase64 );
            }
            // console.log(result);
        } catch (E) {
            console.log(E);
        }
    }

    sendPhotoCitizen() {
        this.props.navigation.navigate('Provision')
    }



    render() {
        let { image } = this.state;

        if (image != null) {
            return (
                <View style={styles.container}>
                    <View style={{marginTop: Constants.statusBarHeight}}>
                        <Image source={{ uri: image }} style={{ width: width, height: height }} />
                        <View style={styles.getStartedContainer2}>
                            <TouchableOpacity onPress={() => this.setState({ image: null })}
                                style={[styles.button2, styles.buttonFacebook]}>
                                <Text style={styles.buttonText}>ยกเลิก</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.sendPhotoCitizen()}
                                style={[styles.button2, styles.buttonMobile]}>
                                <Text style={styles.buttonText}>บันทึก</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.inputWrapper2}>
                        <ResponsiveImage
                            source={require('../../../assets/images/drivelicence_1.png')}
                            initWidth='320'
                            initHeight='200'
                        />
                        <Text style={styles.inputLabel2}>ยืนยันตัวตนด้วยการถ่ายรูปบัตรประชาชน</Text>
                    </View>
                    <View style={styles.getStartedContainer}>
                        <TouchableOpacity onPress={this._pickImage}
                            style={[styles.button, styles.buttonMobile]}>
                            <Text style={styles.buttonText}>ถ่ายรูป</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 10,
    },
    camera: {
        width: 200,
        height: 200
    },
    viewInput: {
        // alignItems: 'center',
        marginHorizontal: 10,
    },
    getStartedContainer: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        right: 0,
        left: 0
    },
    getStartedContainer2: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        right: 0,
        left: 0
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    button: {
        height: 50,
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
    button2: {
        height: 50,
        width: width * .4,
        marginTop: 10,
        marginHorizontal: 10,
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
    buttonFacebook: {
        backgroundColor: '#FF3333',
    },
    buttonMobile: {
        backgroundColor: '#4CAF50',
    },
    buttonText: {
        fontSize: hp('2.4%'),
        color: '#fff',
        fontFamily: 'sukhumvit-set',
    },
    titleWrapper: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    title: {
        color: 'red',
        fontSize: 16,
        fontWeight: '800',
        paddingVertical: 30
    },
    wrapper: {
        marginTop: 30
    },
    inputWrapper1: {
        paddingVertical: 50,
        paddingHorizontal: 20,
        backgroundColor: '#009C92'
    },
    inputWrapper2: {
        marginTop: 50,
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: 'center'
        // backgroundColor: '#E0F8F1'
    },
    inputWrapper3: {
        paddingVertical: 50,
        paddingHorizontal: 20,
        backgroundColor: '#2F0B3A'
    },
    inputLabel1: {
        color: '#fff',
        fontSize: hp('2%'),
        fontWeight: '800'
    },
    inputLabel2: {
        color: '#000',
        fontSize: hp('2%'),
        textAlign: 'center',
        fontFamily: 'sukhumvit-set',
        marginTop: 20
    },
    inputLabel3: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '800',
        textAlign: 'center'
    }
});
