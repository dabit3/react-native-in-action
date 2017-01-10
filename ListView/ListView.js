import React, { Component } from 'react'
import { TextInput, ListView, TouchableHighlight, View, Text, StyleSheet } from 'react-native' // A
let styles = {}

const ds = new ListView.DataSource({ // B
  rowHasChanged: (r1, r2) => r1 !== r2
})
const people = ['chris', 'amy', 'jennifer', 'mike'] // C

class App extends Component {
  constructor() {
    super()
    this.state = { // D
      people,
      dataSource: ds.cloneWithRows(people),
      text: ''
    }
    this.addToRow = this.addToRow.bind(this)
    this.addText setText = this. setTextaddText.bind(this)
    this.removeFromRow = this.removeFromRow.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
  }
  renderRow (data, sectionID, rowId) { // DE
    return (
      <View style={{flexDirection: 'row'}}>
        <Text>{data} - </Text>
        <Text onPress={() => this.removeFromRow(rowId)}>x</Text>
      </View>)
  }
  addToRow () { // F
    const people = [...this.state.people, this.state.text]
    this.setState({
      people,
      text: '',
      dataSource: this.state.dataSource.cloneWithRows(people)
    })
  }
  removeFromRow (rowId) { // G
    let people = this.state.people.slice()
    people.splice(rowId, 1)
    this.setState({
      people,
      dataSource: this.state.dataSource.cloneWithRows(people)
    })
  }
  addText setText (text) { // H
    this.setState({
      text
    })
  }
  renderHeader () { // I
    return <Text style={{padding: 10, fontSize: 20}}>People</Text>
  }
  render () {
    return (
      <View style={styles.container}>
        <ListView // J
          renderHeader={this.renderHeader}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
        <TextInput style={styles.input} value={this.state.text} onChangeText={this.addTextsetText} />
        <TouchableHighlight onPress={this.addToRow} style={styles.button}>
          <Text>Add Text</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    margin: 20,
    paddingTop: 140,
  },
  input: {
    height: 60,
    backgroundColor: '#dddddd',
    padding: 10
  },
  button: {
    margin: 10,
    backgroundColor: '#ededed',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  }
})
