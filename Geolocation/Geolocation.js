import React, { Component } from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
let styles = {}

class GeolocationExample extends Component {
  constructor () {
    super()
    this.state = {
      originalCoords: {},
      updatedCoords: {},
      id: ''
    }
    this.clearWatch = this.clearWatch.bind(this)
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        this.setState({originalCoords: success.coords})
      },
      (err) => console.log('err:', err)
    )
    let id = navigator.geolocation.watchPosition(
      (success) => {
        this.setState({
          id,
          updatedCoords: success.coords
        })        
      },
      (err) => console.log('err:', err)
    )
  }
  clearWatch () {
    navigator.geolocation.clearWatch(this.state.id)
  }
  render () {
    const { originalCoords, updatedCoords } = this.state
    return (
      <View style={styles.container}>
        <Text>Original Coordinates</Text>
        <Text>Latitude: {originalCoords.latitude}</Text>
        <Text>Longitude: {originalCoords.longitude}</Text>
        <Text>Updated Coordinates</Text>
        <Text>Latitude: {updatedCoords.latitude}</Text>
        <Text>Longitude: {updatedCoords.longitude}</Text>
        <TouchableHighlight
          onPress={this.clearWatch}
          style={styles.button}>
          <Text>Clear Watch</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    height: 60,
    marginTop: 15,
    backgroundColor: '#ededed',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
