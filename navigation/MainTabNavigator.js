import React from 'react';
import { Platform, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import * as Icon from '@expo/vector-icons'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//Main
import MainHome from '../screen/Main/MainHome';
//MainMenutop
import MainScan from '../screen/Main/Home/MenuTop/Scan/MainScan';
import MainPayQR from '../screen/Main/Home/MenuTop/PayQR/MainPayQR';
import MainCoupon from '../screen/Main/Home/MenuTop/Coupon/MainCoupon';
import MainCouponList from '../screen/Main/Home/MenuTop/Coupon/CouponList/MainCouponList';
import DetailCouponList from '../screen/Main/Home/MenuTop/Coupon/CouponList/DetailCouponList';
import ExpireCouponList from '../screen/Main/Home/MenuTop/Coupon/CouponList/ExpireCouponList';
import MainWallet from '../screen/Main/Home/MenuTop/Wallet/MainWallet';
import MainAddBank from '../screen/Main/Home/MenuTop/Wallet/AddBank/MainAddBank';
import DetailAddBank from '../screen/Main/Home/MenuTop/Wallet/AddBank/DetailAddBank';
import DetailAddBankBay from '../screen/Main/Home/MenuTop/Wallet/AddBank/DetailAddBankBay';
import DetailAddBankBbl from '../screen/Main/Home/MenuTop/Wallet/AddBank/DetailAddBankBbl';
import DetailAddBankGsb from '../screen/Main/Home/MenuTop/Wallet/AddBank/DetailAddBankGsb';
import DetailAddBankKbank from '../screen/Main/Home/MenuTop/Wallet/AddBank/DetailAddBankKbank';
import DetailAddBankKtb from '../screen/Main/Home/MenuTop/Wallet/AddBank/DetailAddBankKtb';
import DetailAddBankLhb from '../screen/Main/Home/MenuTop/Wallet/AddBank/DetailAddBankLhb';
import DetailAddBankTbank from '../screen/Main/Home/MenuTop/Wallet/AddBank/DetailAddBankTbank';
import DetailAddBankTmb from '../screen/Main/Home/MenuTop/Wallet/AddBank/DetailAddBankTmb';
import MainAddCreditCard from '../screen/Main/Home/MenuTop/Wallet/AddCreditCard/MainAddCreditCard';

//MainMenu
import MainPromotion from '../screen/Main/Home/Menu/Promotion/MainPromotion';
import MainPackageMobile from '../screen/Main/Home/Menu/PackageMobile/MainPackageMobile'
import MainTopupMobile from '../screen/Main/Home/Menu/TopupMobile/MainTopupMobile'
import MainPayBill from '../screen/Main/Home/Menu/PayBill/MainPayBill'
import MainTopupCard from '../screen/Main/Home/Menu/TopupCard/MainTopupCard'
import MainTopupGames from '../screen/Main/Home/Menu/TopupGames/MainTopupGames'
import MainTopupWallet from '../screen/Main/Home/Menu/TopupWallet/MainTopupWallet'
import MainTransfer from '../screen/Main/Home/Menu/Transfer/MainTransfer'
import MainChekBill from '../screen/Main/Home/Menu/ChekBill/MainChekBill'
//DetailMainMenu
import DetailTopupMobile from '../screen/Main/Home/Menu/TopupMobile/DetailTopupMobile'
import CheckOutTopupMobile from '../screen/Main/Home/Menu/TopupMobile/CheckOutTopupMobile'
import DetailTopupCard from '../screen/Main/Home/Menu/TopupCard/DetailTopupCard'
import CheckOutTopupCard from '../screen/Main/Home/Menu/TopupCard/CheckOutTopupCard'
import DetailTopupGame from '../screen/Main/Home/Menu/TopupGames/DetailTopupGame'
import CheckOutTopupGame from '../screen/Main/Home/Menu/TopupGames/CheckOutTopupGame'
import CreditcardPayBillDetail from '../screen/Main/Home/Menu/PayBill/CreditcardPayBillDetail'
import UtilitiesPayBillDetail from '../screen/Main/Home/Menu/PayBill/UtilitiesPayBillDetail'
import TelePayBillDetail from '../screen/Main/Home/Menu/PayBill/TelePayBillDetail'
import InsurePayBillDetail from '../screen/Main/Home/Menu/PayBill/InsurePayBillDetail'
import LeasingPayBillDetail from '../screen/Main/Home/Menu/PayBill/LeasingPayBillDetail'
import EstatePayBillDetail from '../screen/Main/Home/Menu/PayBill/EstatePayBillDetail'
import EduPayBillDetail from '../screen/Main/Home/Menu/PayBill/EduPayBillDetail'
import OtherPayBillDetail from '../screen/Main/Home/Menu/PayBill/OtherPayBillDetail'
import DetailChekBill from '../screen/Main/Home/Menu/ChekBill/DetailChekBill'
import CompleteChekBilly from '../screen/Main/Home/Menu/ChekBill/CompleteChekBilly'
import DetailTransfer from '../screen/Main/Home/Menu/Transfer/DetailTransfer'
import CheckOutTranster from '../screen/Main/Home/Menu/Transfer/CheckOutTranster'
import DetailTransferBank from '../screen/Main/Home/Menu/Transfer/TransferBank/DetailTransferBank'
import CheckOutTransterBank from '../screen/Main/Home/Menu/Transfer/TransferBank/CheckOutTransterBank'


//Card
import MainCard from '../screen/Main/Card/MainCard'
import CreateCard from '../screen/Main/Card/CreateCard'

//Notification
import MainNotification from '../screen/Main/Notification/MainNotification'
import MainNotipromo from '../screen/Main/Notification/Notipromo/MainNotipromo'
import MainOrder from '../screen/Main/Notification/Order/MainOrder'
import DetailOrder from '../screen/Main/Notification/Order/DetailOrder'
import MainSystem from '../screen/Main/Notification/System/MainSystem'


//Profile
import MainProfile from '../screen/Main/Profile/MainProfile'
import ProfileDetail from '../screen/Main/Profile/MyProfile/ProfileDetail'
import EditName from '../screen/Main/Profile/MyProfile/EditName'
import EditEmail from '../screen/Main/Profile/MyProfile/EditEmail'
import EditID from '../screen/Main/Profile/MyProfile/EditID'
import VerifyProfile from '../screen/Main/Profile/MyProfile/VerifyProfile'
import MainAddressbook from '../screen/Main/Profile/MyProfile/Addressbook/MainAddressbook'
import AddAddressbook from '../screen/Main/Profile/MyProfile/Addressbook/AddAddressbook'
import MainSecurityAccount from '../screen/Main/Profile/SecurityAccount/MainSecurityAccount'
import MainSetting from '../screen/Main/Profile/Setting/MainSetting'
import MainHelpCenter from '../screen/Main/Profile/HelpCenter/MainHelpCenter'
import MainAbout from '../screen/Main/Profile/About/MainAbout'
import MainHistory from '../screen/Main/Profile/History/MainHistory'
import DetailHistory from '../screen/Main/Profile/History/DetailHistory'


// export default createStackNavigator(
//   {
//     MainHome: {
//       screen: MainHome,
//       navigationOptions: ({ navigation }) => ({
//         title: 'MainHome',
//         header: null
//       })
//     },
//   }
// );

const Main = createStackNavigator(
  {
    MainHome: {
      screen: MainHome,
      navigationOptions: ({ navigation }) => ({
        title: 'MainHome',
        header: null
      })
    },
    //MenuTop
    MainScan: {
      screen: MainScan,
      navigationOptions: ({ navigation }) => ({
        title: 'MainScan',
        header: null,
      })
    },
    MainPayQR: {
      screen: MainPayQR,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>ชำระให้ร้านค้า</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
        headerStyle: {
          backgroundColor: '#03DAC6',
          elevation: null,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        }
      })
    },
    MainCoupon: {
      screen: MainCoupon,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>คูปอง</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    MainCouponList: {
      screen: MainCouponList,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>คูปอง</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
      })
    },
    ExpireCouponList: {
      screen: ExpireCouponList,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>คูปองใช้แล้ว/หมดอายุ</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
      })
    },
    DetailCouponList: {
      screen: DetailCouponList,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>รายละเอียดคูปอง</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
      })
    },
    MainWallet: {
      screen: MainWallet,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>My Wallet</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
        headerStyle: {
          backgroundColor: '#03DAC6',
          elevation: null,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        }
      })
    },
    MainAddCreditCard: {
      screen: MainAddCreditCard,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เพิ่มบัตรเครดิต/เดบิต</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
        headerStyle: {
          backgroundColor: '#03DAC6',
          elevation: null,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        }
      })
    },
    MainAddBank: {
      screen: MainAddBank,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เพิ่มบัญชีธนาคาร</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
        headerStyle: {
          backgroundColor: '#03DAC6',
          elevation: null,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        }
      })
    },
    DetailAddBank: {
      screen: DetailAddBank,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เพิ่มบัญชีธนาคาร</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
        headerStyle: {
          backgroundColor: '#03DAC6',
          elevation: null,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        }
      })
    },
    DetailAddBankBay: {
      screen: DetailAddBankBay,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เพิ่มบัญชีธนาคาร</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
        headerStyle: {
          backgroundColor: '#03DAC6',
          elevation: null,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        }
      })
    },
    DetailAddBankBbl: {
      screen: DetailAddBankBbl,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เพิ่มบัญชีธนาคาร</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
        headerStyle: {
          backgroundColor: '#03DAC6',
          elevation: null,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        }
      })
    },
    DetailAddBankGsb: {
      screen: DetailAddBankGsb,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เพิ่มบัญชีธนาคาร</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
        headerStyle: {
          backgroundColor: '#03DAC6',
          elevation: null,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        }
      })
    },
    DetailAddBankKbank: {
      screen: DetailAddBankKbank,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เพิ่มบัญชีธนาคาร</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
        headerStyle: {
          backgroundColor: '#03DAC6',
          elevation: null,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        }
      })
    },
    DetailAddBankKtb: {
      screen: DetailAddBankKtb,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เพิ่มบัญชีธนาคาร</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
        headerStyle: {
          backgroundColor: '#03DAC6',
          elevation: null,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        }
      })
    },
    DetailAddBankLhb: {
      screen: DetailAddBankLhb,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เพิ่มบัญชีธนาคาร</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
        headerStyle: {
          backgroundColor: '#03DAC6',
          elevation: null,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        }
      })
    },
    DetailAddBankTbank: {
      screen: DetailAddBankTbank,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เพิ่มบัญชีธนาคาร</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
        headerStyle: {
          backgroundColor: '#03DAC6',
          elevation: null,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        }
      })
    },
    DetailAddBankTmb: {
      screen: DetailAddBankTmb,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เพิ่มบัญชีธนาคาร</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
        headerStyle: {
          backgroundColor: '#03DAC6',
          elevation: null,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        }
      })
    },
    //Menu
    MainPromotion: {
      screen: MainPromotion,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>รวมโปรโมชันบน PayNi</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    MainPackageMobile: {
      screen: MainPackageMobile,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เลือกเครือข่าย</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    MainTopupMobile: {
      screen: MainTopupMobile,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เลือกเครือข่าย</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    DetailTopupMobile: {
      screen: DetailTopupMobile,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เติมเงินมือถือ</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    CheckOutTopupMobile: {
      screen: CheckOutTopupMobile,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>ชำระเงิน</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    MainPayBill: {
      screen: MainPayBill,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>จ่ายบิล</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    CreditcardPayBillDetail: {
      screen: CreditcardPayBillDetail,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>บิลค่าบัตรเครดิต / สินเชื่อ</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    UtilitiesPayBillDetail: {
      screen: UtilitiesPayBillDetail,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>บิลค่าน้ำ ค่าไฟ และภาษี</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    TelePayBillDetail: {
      screen: TelePayBillDetail,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>บิลโทรคมนาคม</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    InsurePayBillDetail: {
      screen: InsurePayBillDetail,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>บิลประกัน และประกันสังคม</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    LeasingPayBillDetail: {
      screen: LeasingPayBillDetail,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>บิลลิสซิ่ง</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    EstatePayBillDetail: {
      screen: EstatePayBillDetail,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>บิลอสังหาริมทรัพย์</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    EduPayBillDetail: {
      screen: EduPayBillDetail,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>บิลการศึกษา</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    OtherPayBillDetail: {
      screen: OtherPayBillDetail,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>บิลอื่นๆ</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    MainTopupCard: {
      screen: MainTopupCard,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>ซื้อบัตรเติมเงิน</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    DetailTopupCard: {
      screen: DetailTopupCard,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>บัตรเติมเงิน</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    CheckOutTopupCard: {
      screen: CheckOutTopupCard,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>ชำระเงิน</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    MainTopupGames: {
      screen: MainTopupGames,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เติมเกม</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    DetailTopupGame: {
      screen: DetailTopupGame,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เติมเกม</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    CheckOutTopupGame: {
      screen: CheckOutTopupGame,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>ชำระเงิน</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    MainTopupWallet: {
      screen: MainTopupWallet,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เติมเงิน</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    MainTransfer: {
      screen: MainTransfer,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>โอน</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    DetailTransfer: {
      screen: DetailTransfer,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>โอน</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    CheckOutTranster: {
      screen: CheckOutTranster,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>โอน</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    DetailTransferBank: {
      screen: DetailTransferBank,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>ไปยังบัญชีธนาคาร</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    CheckOutTransterBank: {
      screen: CheckOutTransterBank,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>ไปยังบัญชีธนาคาร</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    MainChekBill: {
      screen: MainChekBill,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เรียกเก็บเงิน</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    DetailChekBill: {
      screen: DetailChekBill,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เรียกเก็บเงิน</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    CompleteChekBilly: {
      screen: CompleteChekBilly,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>เรียกเก็บเงิน</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
        headerLeft: ()=> null,
        gestureEnabled: false,
      })
    },
    
  },
);

Main.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName

  if (routeName == 'MainScan') {
    tabBarVisible = false
  } else if (routeName == 'MainPayQR') {
    tabBarVisible = false
  } else if (routeName == 'MainCoupon') {
    tabBarVisible = false
  } else if (routeName == 'MainWallet') {
    tabBarVisible = false
  } else if (routeName == 'MainPromotion') {
    tabBarVisible = false
  } else if (routeName == 'MainPackageMobile') {
    tabBarVisible = false
  } else if (routeName == 'MainTopupMobile') {
    tabBarVisible = false
  } else if (routeName == 'MainPayBill') {
    tabBarVisible = false
  } else if (routeName == 'MainTopupCard') {
    tabBarVisible = false
  } else if (routeName == 'MainTopupGames') {
    tabBarVisible = false
  } else if (routeName == 'MainTopupWallet') {
    tabBarVisible = false
  } else if (routeName == 'MainTransfer') {
    tabBarVisible = false
  } else if (routeName == 'MainChekBill') {
    tabBarVisible = false
  } else if (routeName == 'DetailTopupMobile') {
    tabBarVisible = false
  } else if (routeName == 'CheckOutTopupMobile') {
    tabBarVisible = false
  } else if (routeName == 'DetailTopupGame') {
    tabBarVisible = false
  } else if (routeName == 'CheckOutTopupGame') {
    tabBarVisible = false
  } else if (routeName == 'CreditcardPayBillDetail') {
    tabBarVisible = false
  } else if (routeName == 'UtilitiesPayBillDetail') {
    tabBarVisible = false
  } else if (routeName == 'TelePayBillDetail') {
    tabBarVisible = false
  } else if (routeName == 'InsurePayBillDetail') {
    tabBarVisible = false
  } else if (routeName == 'LeasingPayBillDetail') {
    tabBarVisible = false
  } else if (routeName == 'EstatePayBillDetail') {
    tabBarVisible = false
  } else if (routeName == 'EduPayBillDetail') {
    tabBarVisible = false
  } else if (routeName == 'OtherPayBillDetail') {
    tabBarVisible = false
  } else if (routeName == 'DetailChekBill') {
    tabBarVisible = false
  } else if (routeName == 'CompleteChekBilly') {
    tabBarVisible = false
  } else if (routeName == 'DetailTransfer') {
    tabBarVisible = false
  } else if (routeName == 'CheckOutTranster') {
    tabBarVisible = false
  } else if (routeName == 'DetailTransferBank') {
    tabBarVisible = false
  } else if (routeName == 'CheckOutTransterBank') {
    tabBarVisible = false
  } else if (routeName == 'MainAddCreditCard') {
    tabBarVisible = false
  } else if (routeName == 'MainAddCreditCard') {
    tabBarVisible = false
  } else if (routeName == 'MainAddBank') {
    tabBarVisible = false
  } else if (routeName == 'DetailAddBank') {
    tabBarVisible = false
  } else if (routeName == 'DetailAddBankBay') {
    tabBarVisible = false
  } else if (routeName == 'DetailAddBankBbl') {
    tabBarVisible = false
  } else if (routeName == 'DetailAddBankGsb') {
    tabBarVisible = false
  } else if (routeName == 'DetailAddBankKbank') {
    tabBarVisible = false
  } else if (routeName == 'DetailAddBankKtb') {
    tabBarVisible = false
  } else if (routeName == 'DetailAddBankLhb') {
    tabBarVisible = false
  } else if (routeName == 'DetailAddBankTbank') {
    tabBarVisible = false
  } else if (routeName == 'DetailAddBankTmb') {
    tabBarVisible = false
  } else if (routeName == 'MainCouponList') {
    tabBarVisible = false
  } else if (routeName == 'ExpireCouponList') {
    tabBarVisible = false
  } else if (routeName == 'DetailCouponList') {
    tabBarVisible = false
  }
  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => (
      <View style={{ alignItems: 'center' }}>
        <Icon.Entypo
          name='home'
          size={26}
          style={{ marginTop: -7, alignItems: 'center', justifyContent: 'center' }}
          color={focused ? '#03DAC6' : '#ccc'}
        />
        <Text style={{
          color: focused ? '#03DAC6' : '#ccc',
          fontSize: hp('1.7%'),
          fontFamily: 'sukhumvit-set',
          width: 50,
          textAlign: 'center'
        }}>หน้าหลัก</Text>
      </View>
    ),
  }
};

const Card = createStackNavigator(
  {
    MainCard: {
      screen: MainCard,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>Payni Card</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        }
      })
    },
    CreateCard: {
      screen: CreateCard,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>สร้างบัตร</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        },
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    
  },
);

Card.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName

  if (routeName == 'CreateCard') {
    tabBarVisible = false
  }
  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => (
      <View style={{ alignItems: 'center', width: 100 }}>
        <Icon.FontAwesome
          name='credit-card'
          size={26}
          style={{ marginTop: -7, alignItems: 'center', justifyContent: 'center' }}
          color={focused ? '#03DAC6' : '#ccc'}
        />
        <Text style={{
          color: focused ? '#03DAC6' : '#ccc',
          fontSize: hp('1.7%'),
          fontFamily: 'sukhumvit-set',
          width: 50,
          textAlign: 'center'
        }}>บัตร</Text>
      </View>
    ),
  }
};

const Notification = createStackNavigator(
  {
    MainNotification: {
      screen: MainNotification,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>การแจ้งเตือน</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        }
      })
    },
    MainNotipromo: {
      screen: MainNotipromo,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>โปรโมชัน</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        },
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    MainOrder: {
      screen: MainOrder,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>รายการ</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        },
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    DetailOrder: {
      screen: DetailOrder,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>รายละเอียดรายการ</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        },
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    MainSystem: {
      screen: MainSystem,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>ระบบ</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        },
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
  },
);

Notification.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName

  if (routeName == 'MainNotipromo') {
    tabBarVisible = false
  } else if (routeName == 'MainOrder') {
    tabBarVisible = false
  } else if (routeName == 'DetailOrder') {
    tabBarVisible = false
  } else if (routeName == 'MainSystem') {
    tabBarVisible = false
  } 
  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => (
      <View style={{ alignItems: 'center' }}>
        <Icon.FontAwesome5
          name='bell'
          size={26}
          style={{ marginTop: -7, alignItems: 'center', justifyContent: 'center' }}
          color={focused ? '#03DAC6' : '#ccc'}
        />
        <Text style={{
          color: focused ? '#03DAC6' : '#ccc',
          fontSize: hp('1.7%'),
          fontFamily: 'sukhumvit-set',
          width: 50,
          textAlign: 'center'
        }}>แจ้งเตือน</Text>
      </View>
    ),
  }
};

const Profile = createStackNavigator(
  {
    MainProfile: {
      screen: MainProfile,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>ฉัน</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        }
      })
    },
    ProfileDetail: {
      screen: ProfileDetail,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>โปรไฟล์</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        },
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    EditName: {
      screen: EditName,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>ชื่อเล่น</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        },
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    EditEmail: {
      screen: EditEmail,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>Email</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        },
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    EditID: {
      screen: EditID,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>PayNi ID</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        },
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    VerifyProfile: {
      screen: VerifyProfile,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>ยืนยันตัวตน</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        },
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    MainAddressbook: {
      screen: MainAddressbook,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>Address Book</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        },
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    AddAddressbook: {
      screen: AddAddressbook,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>Add Address</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        },
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    MainSecurityAccount: {
      screen: MainSecurityAccount,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>ความปลอดภัยของบัญชี</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        },
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    MainSetting: {
      screen: MainSetting,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>ตั้งค่า</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        },
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    MainHelpCenter: {
      screen: MainHelpCenter,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>ศูนย์ช่วยเหลือ</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        },
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    MainAbout: {
      screen: MainAbout,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>เกี่ยวกับ PayNi</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        },
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    MainHistory: {
      screen: MainHistory,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>ประวัติการทำรายการ</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        },
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
    DetailHistory: {
      screen: DetailHistory,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.8%'), }}>รายละเอียดรายการ</Text>,
        headerTitleStyle: {
          alignSelf: 'center'
        },
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
      })
    },
  },
);

Profile.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName

  if (routeName == 'ProfileDetail') {
    tabBarVisible = false
  } else if (routeName == 'EditName') {
    tabBarVisible = false
  } else if (routeName == 'EditEmail') {
    tabBarVisible = false
  } else if (routeName == 'EditID') {
    tabBarVisible = false
  } else if (routeName == 'VerifyProfile') {
    tabBarVisible = false
  } else if (routeName == 'MainAddressbook') {
    tabBarVisible = false
  } else if (routeName == 'AddAddressbook') {
    tabBarVisible = false
  } else if (routeName == 'MainSecurityAccount') {
    tabBarVisible = false
  } else if (routeName == 'MainSetting') {
    tabBarVisible = false
  } else if (routeName == 'MainHelpCenter') {
    tabBarVisible = false
  } else if (routeName == 'MainAbout') {
    tabBarVisible = false
  } else if (routeName == 'MainHistory') {
    tabBarVisible = false
  } else if (routeName == 'DetailHistory') {
    tabBarVisible = false
  }
  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => (
      <View style={{ alignItems: 'center' }}>
        <Icon.FontAwesome
          name='user'
          size={26}
          style={{ marginTop: -7, alignItems: 'center', justifyContent: 'center' }}
          color={focused ? '#03DAC6' : '#ccc'}
        />
        <Text style={{
          color: focused ? '#03DAC6' : '#ccc',
          fontSize: hp('1.7%'),
          fontFamily: 'sukhumvit-set',
          width: 50,
          textAlign: 'center'
        }}>ฉัน</Text>
      </View>
    ),
  }
};


export default createMaterialBottomTabNavigator(
  {
    Main,
    Card,
    Notification,
    Profile
  },
  {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'Main',
    barStyle: { backgroundColor: '#fff', },
    swipeEnabled: false,
    labeled: false,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      iconStyle: { width: 50, alignItems: 'center' },
      style: {
        backgroundColor: '#fff',
        marginTop: 30,
        elevation: 0
      },
      indicatorStyle: { backgroundColor: "#ffffff" }
    }

  },
);