import React, { Component }  from 'react'
import { NetInfo, View, Text, StyleSheet } from 'react-native' // A

class NetInfoExample extends Component {
  constructor () {
    super()
    this.state = {
      connectionInfo: {}
    }
    this.handleConnectivityChange = this.handleConnectivityChange.bind(this)
  }
  componentDidMount () {
    NetInfo.getConnectionInfo().then((connectionInfo) => {
      console.log('type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType)
      this.setState({connectionInfo})
    })
    NetInfo.addEventListener('connectionChange', this.handleConnectivityChange)
  }
  handleConnectivityChange (connectionInfo) {
    console.log('new connection:', connectionInfo)
    this.setState({connectionInfo})
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>{this.state.connectionInfo.type}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})