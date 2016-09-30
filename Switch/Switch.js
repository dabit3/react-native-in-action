import React, { Component } from 'react'
import {
  Text,
  View,
  Switch
} from 'react-native'

class SwitchExample extends Component {
  constructor () {
    super()
    this.state = {
      switchValue: false
    }
  }
  render () {
    const { switchValue } = this.state
    return (
      <View style={{flex: 1, margin: 20, marginTop: 30}}>
        <Switch
          onValueChange={(value) => this.setState({switchValue: value})}
          style={{marginBottom: 10}}
          value={this.state.switchValue} />
          {
            switchValue && (
              <View style={{backgroundColor: '#ddd', padding: 20}}>
                <Text>Switch is toggled on.</Text>
              </View>
            )
          }
      </View>
    )
  }
}

export default SwitchExample
