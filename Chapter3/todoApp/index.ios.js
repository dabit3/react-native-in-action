import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import App from './app/App'

class TodoApp extends Component {
  render () {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('TodoApp', () => TodoApp)
