import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native'

let styles = {}

class TextInputExample extends Component {
  constructor () {
    super()
    this.state = {
      inputValue: ''
    }
  }
  render () {
    const { inputValue } = this.state
    return (
      <View style={{flex: 1, margin: 20, marginTop: 50}}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={(text) => this.setState({inputValue: text})}
            style={styles.input}
            placeholder='Please Enter Name'
          />
        </View>
        <Text>{inputValue}</Text>
      </View>
    )
  }
}

styles = StyleSheet.create({
  input: {
    height: 30
  },
  inputContainer: {
    borderBottomColor: '#666',
    borderBottomWidth: 2,
    marginBottom: 30
  }
})