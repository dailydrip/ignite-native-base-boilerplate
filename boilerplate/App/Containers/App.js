import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Provider, connect } from 'react-redux'

import createStore from '../Redux'
import RootContainer from './RootContainer'
import CreateApolloClient from '../GraphQL/client'

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
