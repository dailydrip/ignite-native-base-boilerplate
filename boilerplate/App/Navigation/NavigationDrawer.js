import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import ListviewExample from '../Containers/ListviewExample'
import CardExample from '../Containers/CardExample'
import DrawerContent from '../Containers/DrawerContent'
import GraphQLScreen from '../Containers/GraphQLScreen'

const NavigationDrawer = DrawerNavigator(
  {
    ListviewExample: { screen: ListviewExample },
    GraphQLScreen: { screen: GraphQLScreen },
    CardExample: { screen: CardExample }
  },
  {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    initialRouteName: 'ListviewExample',
    contentComponent: props => <DrawerContent {...props} />
  }
)

export default NavigationDrawer
