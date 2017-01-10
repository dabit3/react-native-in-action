import React, { Component }  from 'react'
import { TouchableHighlight, NetInfo, TextInput, View, Text, StyleSheet } from 'react-native' // A

let styles = {}

class NetInfoExample extends Component {
  constructor () {
    super()
    this.state = {
      connection: ''
    }
    this.handleConnectivityChange = this.handleConnectivityChange.bind(this)
  }
  componentDidMount () {
    NetInfo.fetch().done((connection) => {
      console.log('connection: ' + connection)
      this.setState({connection})
    })
    NetInfo.addEventListener('change', this.handleConnectivityChange)
  }
  handleConnectivityChange (connection) {
    console.log('new connection:', connection)
    this.setState({connection})
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>{this.state.connection}</Text>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})