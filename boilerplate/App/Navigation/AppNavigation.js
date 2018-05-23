import { StackNavigator } from 'react-navigation'

import LaunchScreen from '../Containers/LaunchScreen'
import Login from '../Containers/LoginScreen'
import NavigationDrawer from './NavigationDrawer'

// screens identified by the router

const PrimaryNav = StackNavigator(
  {
    Login: { screen: Login },
    LaunchScreen: { screen: LaunchScreen },
    NavigationDrawer: { screen: NavigationDrawer }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)

export default PrimaryNav
