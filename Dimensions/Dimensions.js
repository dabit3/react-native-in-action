import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
let styles = {}

const { width, height } = Dimensions.get('window')
const windowWidth = Dimensions.get('window').width

const DimensionsExample = () => (
  <View style={styles.container}>
    <Text>{width}</Text>
    <Text>{height}</Text>
    <Text>{windowWidth}</Text>
  </View>
)

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
