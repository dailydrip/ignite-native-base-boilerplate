import React from "react";
import { connect } from "react-redux";
import { Image, BackHandler } from "react-native";
import {
  Card,
  CardItem,
  Text,
  View,
  Thumbnail,
  Container,
  Header,
  Content,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon
} from "native-base";
// import Icon from 'react-native-vector-icons/Ionicons'
import { withApollo } from "react-apollo";

class GraphQLScreen extends React.Component {
  componentDidMount() {
    this.props.getHello(() => this.props.client);
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>GraphQL Screen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text>Response from GraphQL: {this.props.hello}</Text>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    hello: state.hello.hello
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHello: client => dispatch({ type: "GET_HELLO", payload: { client } })
  };
};

export default withApollo(
  connect(mapStateToProps, mapDispatchToProps)(GraphQLScreen)
);
