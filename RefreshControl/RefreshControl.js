import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  RefreshControl
} from 'react-native'

class RefreshControlExample extends Component {
  constructor () {
    super()
    this.state = {
      numRows: 5,
      refreshing: false
    }
  }
  refreshRows () {
    const { numRows } = this.state
    this.setState({
      refreshing: true
    })
    setTimeout(() => {
      this.setState({
        numRows: numRows + 5,
        refreshing: false
      })
    }, 10000)
  }
  render () {
    const { numRows, refreshing } = this.state
    const rows = []
    for (var i = 0; i < numRows; i++) {
      rows.push(<Text key={i} style={styles.row}>
        Welcome to React Native + {i}!
      </Text>)
    }
    return (
      <View style={{flex: 1, marginTop: 30}}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.refreshRows.bind(this)}
            />
          }
          showsVerticalScrollIndicator={false} >
          {rows}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
