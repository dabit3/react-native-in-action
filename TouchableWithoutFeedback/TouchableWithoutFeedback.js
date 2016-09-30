import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'

let styles = {}

class TouchableWithoutFeedbackExample extends Component {
  constructor () {
    super()
    this.state = {
      showName: true
    }
    this.showName = this.showName.bind(this)
  }
  showName () {
    const { showName } = this.state
    this.setState({
      showName: !showName
    })
  }
  render () {
    const { showName } = this.state
    return (
      <View style={{flex: 1, margin: 20, marginTop: 50}}>
        <TouchableWithoutFeedback
          onPress={this.showName}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Toggle Name</Text>
          </View>
        </TouchableWithoutFeedback>
        {
          showName && (
            <Text style={{marginTop: 20}}>My Name is Nader</Text>
          )
        }
      </View>
    )
  }
}

styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white'
  }
})

export default TouchableWithoutFeedbackExample
