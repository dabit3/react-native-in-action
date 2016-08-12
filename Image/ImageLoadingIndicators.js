import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native'

class ImageMethods extends Component {
  constructor () {
    super()
    this.state = {
      startedLoading: false,
      finishedLoading: false,
      layoutX: undefined,
      layoutY: undefined,
      width: undefined,
      height: undefined
    }
  }
  componentDidMount () {
    StatusBar.setHidden(true)
  }
  onLayout (event) {
    const { y, width, x, height } = event.nativeEvent.layout
    this.setState({y, width, x, height})
  }
  onLoadStart () {
    this.setState({startedLoading: true})
  }
  onLoad () {
    this.setState({finishedLoading: true})
  }
  render () {
    const uri = 'https://facebook.github.io/react/img/logo_og.png'
    return (
      <View style={styles.container}>
        <Image
          onLayout={this.onLayout.bind(this)}
          onLoadStart={this.onLoadStart.bind(this)}
          onLoad={this.onLoad.bind(this)}
          style={styles.image}
          source={{uri}} />
        {this.state.startedLoading && <Text>Starting to load</Text>}
        {this.state.finishedLoading && <Text>Finished loading</Text>}
        <Text>X: {this.state.x}</Text>
        <Text>Y: {this.state.y}</Text>
        <Text>Width: {this.state.width}</Text>
        <Text>Height: {this.state.height}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 18,
    color: 'white',
    fontWeight: '600'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10
  }
})

export default ImageMethods
