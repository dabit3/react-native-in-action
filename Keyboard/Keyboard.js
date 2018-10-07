import React, { Component }  from 'react'
import { TouchableHighlight, Keyboard, TextInput, View, Text, StyleSheet } from 'react-native'

let styles = {}

class KeyboardExample extends Component {
  componentWillMount () {
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', () => this.logEvent('keyboardWillShow'))
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => this.logEvent('keyboardDidShow'))
    this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', () => this.logEvent('keyboardWillHide'))
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => this.logEvent('keyboardDidHide'))
    this.keyboardWillChangeFrameListener = Keyboard.addListener('keyboardWillChangeFrame', () => this.logEvent('keyboardWillChangeFrame'))
    this.keyboardDidChangeFrameListener = Keyboard.addListener('keyboardDidChangeFrame', () => this.logEvent('keyboardDidChangeFrame'))
  }
  logEvent(event) {
    console.log('event: ', event)
  }
  dismissKeyboard () {
    Keyboard.dismiss()
  }
  removeListeners () {
    Keyboard.removeAllListeners('keyboardWillShow')
    Keyboard.removeAllListeners('keyboardDidShow')
    Keyboard.removeAllListeners('keyboardWillHide')
    Keyboard.removeAllListeners('keyboardDidHide')
    Keyboard.removeAllListeners('keyboardWillChangeFrame')
    Keyboard.removeAllListeners('keyboardDidChangeFrame')
  }
  render () {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} />
        <TouchableHighlight
          onPress={this.dismissKeyboard}
          style={styles.button}>
          <Text>Dismiss Keyboard</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.removeListeners}
          style={styles.button}>
          <Text>Remove Listeners</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
  },
  input: {
    margin: 10,
    backgroundColor: '#ededed',
    height: 50,
    padding: 10
  },
  button: {
    height: 50,
    backgroundColor: '#dddddd',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})