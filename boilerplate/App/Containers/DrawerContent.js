import { Content, List, ListItem, Text, View } from 'native-base'
import React, { Component } from 'react'
import { Image } from 'react-native'

import styles from './Styles/DrawerContentStyles'
import { Images } from '../Themes'

class DrawerContent extends Component {
  render () {
    const navigation = this.props.navigation
    const items = this.props.items
    return (
      <View style={styles.container}>
        <Image source={Images.logoDark} style={styles.logo} />
        <Content>
          <List
            dataArray={items}
            renderRow={item => (
              <ListItem onPress={() => navigation.navigate(item.routeName)}>
                <Text>{item.routeName}</Text>
              </ListItem>
            )}
          />
        </Content>
      </View>
    )
  }
}

export default DrawerContent
