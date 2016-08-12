import React, { Component } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

class Indicator extends Component {
  constructor () {
    super()
    this.state = {loading: true}
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({ loading: false })
  )
  }
  render () {
    const { loading } = this.state
    return (
      <View style={styles.container}>
        {loading && <ActivityIndicator animating color='blue' size='large' />}
        {!loading && <Text>Component Now Loaded!</Text>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})

export default Indicator
