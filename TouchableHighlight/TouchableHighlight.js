import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'
let styles = {}

const Button = () => {
  const log = () => console.log('Clicked')
  return (
    <TouchableHighlight
      underlayColor='#8a8a8a'
      style={styles.button}
      onPress={log}>
      <Text style={styles.buttonText}>Click Me</Text>
    </TouchableHighlight>
  )
}

styles = StyleSheet.create({
  button: {
    backgroundColor: '#666',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginTop: 100
  },
  buttonText: {
    color: 'white'
  }
})
