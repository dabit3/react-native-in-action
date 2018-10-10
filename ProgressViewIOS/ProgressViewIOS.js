import React, { Component } from 'react'
import { Text, View, ProgressViewIOS } from 'react-native'

class ProgressViewIOSExample extends Component {
  constructor() {
    super()
    this.state = {
      progress: 0,
      frame: 0,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.progress >= 1) {
        return clearInterval(this.interval)
      }
      this.setState({
        progress: this.state.progress + .01
      })
    }, 10)
  }

  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <ProgressViewIOS
          progress={this.state.progress}
        />
        <Text style={{ marginTop: 10, textAlign: 'center' }}>
          {Math.floor(this.state.progress * 100)}% complete
        </Text>
      </View>)
  }
}

export default ProgressViewIOSExample