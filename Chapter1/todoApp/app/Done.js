import React, { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

let Done = ({ _toggleComplete, complete }) => (
	<TouchableHighlight 
    onPress={_toggleComplete}
    underlayColor='#efefef' style={styles.doneButton}>
		<Text style={complete ? styles.complete : null}>Done</Text>
	</TouchableHighlight>
)

let styles = StyleSheet.create({
  doneButton: {
  	alignSelf: 'flex-end',
  	padding: 7,
  	borderColor: '#ededed',
  	borderWidth: 1,
  	borderRadius: 4,
  	marginRight: 5
  },
  complete: {
  	color: 'green',
    fontWeight: 'bold'
  }
})

export default Done
