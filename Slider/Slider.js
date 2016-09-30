import React, { Component } from 'react'
import {
  Text,
  View,
  Slider
} from 'react-native'

class SliderExample extends Component {
  constructor () {
    super()
    this.state = {
      number: 0
    }
  }
  render () {
    const { number } = this.state
    return (
      <View style={{flex: 1, margin: 20, marginTop: 30}}>
        <Slider
          step={1}
          minimumValue={0}
          maximumValue={100}
          onValueChange={(value) => this.setState({number: value})}
        />
        <View>
          <Text>{number}</Text>
        </View>
      </View>
    )
  }
}

export default SliderExample
