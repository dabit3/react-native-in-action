import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'

class ResizeMode extends Component {
  render () {
    const uri = 'https://facebook.github.io/react/img/logo_og.png'
    return (
      <View style={styles.container}>
        <Image
          resizeMode='contain'
          style={styles.image}
          source={{uri}} />
        <Image
          resizeMode='cover'
          style={styles.image}
          source={{uri}} />
        <Image
          resizeMode='stretch'
          style={styles.image}
          source={{uri}} />
        <Image
          resizeMode='repeat'
          style={styles.image}
          source={{uri}} />
        <Image
          resizeMode='center'
          style={styles.image}
          source={{uri}} />
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
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#666666'
  }
})

export default ResizeMode
