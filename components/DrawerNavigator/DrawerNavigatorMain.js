import { AppRegistry, Dimensions } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import HomeComponent from './HomeDrawerComponent'
import WithdrawalComponent from './WithdrawalComponent'
import PaymentCodeComponent from './PaymentCodeComponent'
import ScanCodeComponent from './ScanCodeComponent'
import { Home, ScanCode, Withdrawal, PaymentCode } from './ScreenNames'

var { height, width } = Dimensions.get('window')
let routeConfigs = {
    Home: {
        screen: HomeComponent,
    },
    ScanCode: {
        screen: ScanCodeComponent,
    },
    Withdrawal: {
        screen: WithdrawalComponent,
    },
    PaymentCode: {
        screen: PaymentCodeComponent,
    },
}
let drawerNavigatorConfig = {
    initialRouteName: Home,
    drawerWidth: width / 2,
    drawerPosition: 'left',
    contentOptions: {
        activeTintColor: 'red',
    },
    order: [Home, ScanCode, Withdrawal, PaymentCode],
};
const DrawerNavigator = createDrawerNavigator(routeConfigs, drawerNavigatorConfig);
export default createAppContainer(DrawerNavigator)