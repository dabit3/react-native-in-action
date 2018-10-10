import React from 'react'
import { View, Text, Platform } from 'react-native'

const ComponentIOS = () => (
  <Text>Hello from IOS</Text>
)

const ComponentAndroid = () => (
  <Text>Hello from IOS</Text>
)

const Component = Platform.select({
  ios: () => ComponentIOS,
  android: () => ComponentAndroid,
})();


const PlatformExample = () => (
  <View style={{ marginTop: 100 }}>
    <Text>Hello from my App</Text>
    <Component />
  </View>
)
