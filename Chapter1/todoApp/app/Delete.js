import React, { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

let Delete = ({ _deleteTodo }) => (
	<TouchableHighlight
    onPress={_deleteTodo}
	  underlayColor='#efefef' style={styles.deleteButton}>
		<Text style={styles.deleteText}>Delete</Text>
	</TouchableHighlight>
)

let styles = StyleSheet.create({
  deleteButton: {
  	alignSelf: 'flex-end',
  	padding: 7,
  	borderColor: '#ededed',
  	borderWidth: 1,
  	borderRadius: 4,
  	marginRight: 5
  },
  deleteText: {
  	color: 'red'
  }
})

export default Delete
