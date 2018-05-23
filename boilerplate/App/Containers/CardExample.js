import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title
} from 'native-base'
import React from 'react'
import { BackHandler, Image } from 'react-native'
import { connect } from 'react-redux'
// import Icon from 'react-native-vector-icons/Ionicons'

class CardExample extends React.Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack()
      return true
    })
  }
  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <Icon name='ios-menu' />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>Card Example</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Image
                style={{ resizeMode: 'cover', height: 200, flex: 1 }}
                source={{
                  uri: 'https://facebook.github.io/react/img/logo_og.png'
                }}
              />
            </CardItem>
            <CardItem>
              <Button transparent>
                <Icon name='logo-github' />
                <Text>41,926 stars</Text>
              </Button>
            </CardItem>
          </Card>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Image
                style={{ resizeMode: 'cover', height: 200, flex: 1 }}
                source={{
                  uri:
                    'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'
                }}
              />
            </CardItem>
            <CardItem>
              <Button transparent>
                <Icon name='logo-github' />
                <Text>15,021 stars</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
const mapStateToProps = state => {
  return {
    // ...redux state to props here
  }
}

export default connect(mapStateToProps)(CardExample)
