import React from 'react'
import { View, Text, Platform } from 'react-native'

let styles = {}

const PlatformExample = () => (
  <View style={styles.container}>
    <Text>
       Hello { Platform.OS }
    </Text>
  </View>
)

styles = {
  container: {
    marginTop: 100,
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      }
    })
  }
}