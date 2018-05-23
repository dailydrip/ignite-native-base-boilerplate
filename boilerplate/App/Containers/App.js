import '../Config'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import { ApolloProvider } from 'react-apollo'
import CreateApolloClient from '../GraphQL/client'
import { connect } from 'react-redux'

// create our store
const store = createStore()

class WrappedProvider extends Component {
  render () {
    return (
      <ApolloProvider client={CreateApolloClient()}>
        <RootContainer />
      </ApolloProvider>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

let ConnectedWrappedProvider = connect(mapStateToProps, mapDispatchToProps)(
  WrappedProvider
)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedWrappedProvider />
      </Provider>
    )
  }
}

export default App
