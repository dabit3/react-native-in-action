import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native'
import API from './api'

class blankRNApp extends Component {
  constructor () {
    super()
    this.state = { name: 'chris' }
  }
  componentDidMount () {
    API.getName().then((data) => {
      this.setState({ name: data })
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>Hello there, {this.state.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

AppRegistry.registerComponent('blankRNApp', () => blankRNApp)
