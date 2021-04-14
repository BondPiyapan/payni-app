import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Button,
    Dimensions,
    AsyncStorage,
    Alert,
    ImageBackground,
    BackHandler
} from 'react-native';
import { WebBrowser } from 'expo';
import * as Localization from 'expo-localization';
import i18n from 'ex-react-native-i18n'

const { height, width } = Dimensions.get('window')
export default class ProvisionScreen extends React.Component {
    static navigationOptions = {

    };

    constructor(props) {
        super(props);

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


    render() {

        return (
            <View style={styles.container}>
                <View style={styles.inputWrapper2}>
                    <Text style={styles.inputLabel2}>ข้อกำหนดการให้บริการ</Text>
                </View>
                <View style={styles.getStartedContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}
                        style={[styles.button, styles.buttonMobile]}>
                        <Text style={styles.buttonText}>ถัดไป</Text>
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
    buttonFacebook: {
        backgroundColor: '#3b5998',
    },
    buttonMobile: {
        backgroundColor: '#4CAF50',
    },
    buttonText: {
        fontSize: 18,
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
        paddingVertical: 50,
        paddingHorizontal: 20,
        // backgroundColor: '#E0F8F1'
    },
    inputWrapper3: {
        paddingVertical: 50,
        paddingHorizontal: 20,
        backgroundColor: '#2F0B3A'
    },
    inputLabel1: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '800'
    },
    inputLabel2: {
        color: '#000',
        fontSize: 16,
        fontWeight: '800',
        textAlign: 'center',
        fontFamily: 'sukhumvit-set',
    },
    inputLabel3: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '800',
        textAlign: 'center'
    }
});