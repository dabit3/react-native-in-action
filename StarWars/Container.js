import React from 'react'
import { StyleSheet, View } from 'react-native'

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
})

const Container = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
)

export default Container
