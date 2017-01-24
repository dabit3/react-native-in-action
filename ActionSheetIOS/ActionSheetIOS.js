import React, { Component } from 'react'
import { UIManager, Text, View, ActionSheetIOS, TouchableHighlight } from 'react-native'

const BUTTONS = ['Cancel', 'Button One', 'Button Two', 'Button Three']

class ActionSheetExample extends Component {
  constructor() {
    super()
    this.state = {
      clicked: null
    }
    this.showActionSheet = this.showActionSheet.bind(this)
    this.showShareActionSheetWithOptions = this.showShareActionSheetWithOptions.bind(this)
  }
  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: 0,
    },
    (buttonIndex) => {
      if (buttonIndex > 0) {
        this.setState({ clicked: BUTTONS[buttonIndex] });
      }
    });
  }
  showShareActionSheetWithOptions() {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: 'http://www.reactnative.training',
      message: 'React Native Training',
    },
    (error) => console.log('error:', error),
    (success, method) => {
      if (success) {
        console.log('successfully shared!', success)
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.showActionSheet} style={styles.button}>
          <Text style={styles.buttonText}>Show ActionSheet</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.showShareActionSheetWithOptions} style={styles.button}>
          <Text style={styles.buttonText}>Show ActionSheet With Options</Text>
        </TouchableHighlight>
        <Text>
          {this.state.clicked}
        </Text>
      </View>
    )
  }
}

styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  buttonText: {
    color: 'white'
  }
}

export default ActionSheetExample