import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native'

class BackgroundImage extends Component {
  componentDidMount () {
    StatusBar.setHidden(true)
  }
  render () {
    const uri = 'https://facebook.github.io/react/img/logo_og.png'
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri}}>
          <Text style={styles.text}>Hello From Image!</Text>
        </Image>
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
    width: 300,
    height: 300,
    marginBottom: 10,
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default BackgroundImage
