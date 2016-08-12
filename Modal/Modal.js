import React from 'react'
import { View, Text, Modal, StyleSheet, TouchableHighlight } from 'react-native'

class ModalComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      visible: false
    }
  }
  toggleModal () {
    this.setState({
      visible: !this.state.visible
    })
  }
  render () {
    const { visible } = this.state
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={this.toggleModal.bind(this)}>
          <Text>Show Modal!</Text>
        </TouchableHighlight>
        <Modal visible={visible} animationType='slide'>
          <View style={[styles.container, {backgroundColor: '#ededed'}]}>
            <Text style={{textAlign: 'center'}}>Hello from Modal!!</Text>
            <TouchableHighlight style={styles.button} onPress={this.toggleModal.bind(this)}>
              <Text>Hide Modal!</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#2d96ff'
  }
})

export default ModalComponent
