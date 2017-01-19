import React from 'react'
import { View, Text, Platform } from 'react-native'

const PlatformExample = () => (
  <Text
    style={{ marginTop: 100, color: Platform.OS === 'ios' ? 'blue' : 'green' }}
  >
     Hello { Platform.OS }
  </Text>
)
