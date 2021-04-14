import React from 'react';
import { Platform, StatusBar, StyleSheet, View, AsyncStorage, ActivityIndicator, YellowBox, I18nManager as RNI18nManager, } from 'react-native';
import { AppLoading } from 'expo';
import * as Notifications from 'expo-notifications'
import * as Icon from '@expo/vector-icons'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
// import { loadLocale } from './i18n/i18n'
import AppNavigator from './navigation/AppNavigator';
YellowBox.ignoreWarnings(['Warning:', 'Yellow', 'font', 'De', 'V', 'Animated']);
const ACCESS_NOTI = 'access_noti';
import * as Updates from 'expo-updates';


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };


  async componentDidMount() {
    // timecheckupdate = setInterval(() => {
    //   this.checkUpdate()
    // }, 1000);

    // let compatible = await LocalAuthentication.hasHardwareAsync();
    // if (compatible) {
    //   this.handleAuthentication();
    //   // this.checkForBiometrics();
    // }
    // else alert('Current device does not have the necessary hardware!')
  }

  async checkUpdate() {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        clearInterval(timecheckupdate)
        await Updates.fetchUpdateAsync();
        Updates.reloadAsync();
      };
    } catch (e) {
      console.log(alert(e));
    }
  }
  //   UNSAFE_componentWillMount(){
  //     // loadLocale()
  //     this._notificationSubscription = Notifications.addListener(this._handleNotification);
  //     if (Platform.OS === 'android') {
  //       Notifications.createChannelAndroidAsync('SmartSME', {
  //         name: 'Link-eScooter',
  //         priority: 'max',
  //         sound: true,
  //         vibrate: [0, 250, 250, 250],
  //       });
  //     }
  //   }

  //   _handleNotification = (notification) => {
  //     console.log('notificHandleAPP', notification);
  //     let { origin, data } = notification;
  //     if (origin === "selected") {
  //       // this.props.navigation.navigate('Detail', { post_id: data.content_id })
  //       this.savePushNoti(data)
  //       // alert('T1')
  //     }
  //   }

  //   async savePushNoti(data){
  //     try {
  //         await AsyncStorage.setItem(ACCESS_NOTI,JSON.stringify(data))
  //         console.log("ACCESS_NOTI", data)
  //         // alert("ACCESS_NOTI")
  //     } catch (error) {
  //         console.log("Wrong")
  //     }
  // }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (

        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'sukhumvit-set': require('./assets/fonts/SukhumvitSet-Text.ttf'),
        'sukhumvit-set-bold': require('./assets/fonts/SukhumvitSet-Bold.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});