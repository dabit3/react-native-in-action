import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native'

class ScrollViewExample extends Component {
  render () {
    const rows = []
    for (var i = 0; i < 100; i++) {
      rows.push(<Text key={i} style={styles.row}>
        Welcome to React Native!
      </Text>)
    }
    return (
      <View style={{flex: 1}}>
        <ScrollView> // C
          {rows}
        </ScrollView>
        <ScrollView
          style={{backgroundColor: '#ededed'}}
          horizontal>
          {rows}
        </ScrollView>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  row: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

export default ScrollViewExample
