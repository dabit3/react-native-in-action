import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Header extends Component {
  render () {
    return (
      <View>
        <Text>HEADER</Text>
      </View>
    )
  }
}

const Footer = () => (
  <View>
    <Text>Footer</Text>
  </View>
)

const Main = () => (
  <View>
    <Text> Main </Text>
  </View>
)

class Home extends Component {
  render () {
    return (
      <View>
        <Header />
        <Main />
        <Footer />
      </View>
    )
  }
}

export default Home
