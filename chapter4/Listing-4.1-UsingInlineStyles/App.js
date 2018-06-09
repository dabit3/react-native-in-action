// -------------------------------------------
// Listing 4.1 Using inline styles
// -------------------------------------------
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class App extends Component {
  render () {
    return (
      <View style={{marginLeft: 20, marginTop: 20}}>
        <Text style={{fontSize: 18,color: 'red'}}>Some Text</Text>
      </View>
    )
  }
}