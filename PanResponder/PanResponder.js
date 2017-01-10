import React, { Component }  from 'react'
import { Dimensions, TouchableHighlight, PanResponder, TextInput, View, Text, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get('window')
let styles = {}

class App extends Component {
  constructor () {
    super()
    this.state = {
      oPosition: {
        x: (width / 2) - 100,
        y: (height / 2) - 100,
      },
      position: {
        x: (width / 2) - 100,
        y: (height / 2) - 100,
      },
    }
    this._handlePanResponderMove = this._handlePanResponderMove.bind(this)
    this._handlePanResponderRelease = this._handlePanResponderRelease.bind(this)
  }
  componentWillMount () {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderRelease
    })
  }
  _handlePanResponderMove (evt, gestureState) {
    let ydiff = gestureState.y0 - gestureState.moveY
    let xdiff = gestureState.x0 - gestureState.moveX
    this.setState({
      position: {
        y: this.state.oPosition.y - ydiff,
        x: this.state.oPosition.x - xdiff
      }
    })
  }
  _handlePanResponderRelease () {
    this.setState({
      oPosition: this.state.position
    })
  }
  render () {
    return (
      <View  style={styles.container}>
        <Text style={styles.positionDisplay}>x: {this.state.position.x} y:{this.state.position.y}</Text>
        <View
          {...this._panResponder.panHandlers} // I
          style={[styles.box, { marginLeft: this.state.position.x, marginTop: this.state.position.y } ]} />
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  positionDisplay: {
    textAlign: 'center',
    marginTop: 50,
    zIndex: 1,
    position: 'absolute',
    width
  },
  box: {
    position: 'absolute',
    width: 200,
    height: 200,
    backgroundColor: 'red'
  }
})
