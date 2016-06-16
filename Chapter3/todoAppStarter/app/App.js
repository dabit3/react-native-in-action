import React, { Component, View, Text, StyleSheet } from 'react-native'

class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.main}>Hello From App</Text>
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
  },
  main: {
    marginTop: 1,
    fontSize: 22
  }
})

export default App
