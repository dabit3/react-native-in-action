import React, { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

let TabBarItem = ({ border, title, selected, _setType }) => (
	<TouchableHighlight 
	underlayColor='#efefef'
	onPress={_setType}
	style={[ styles.item, selected ? styles.selected : null, border ? styles.border : null ]}>
    <Text style={styles.itemText}>{title}</Text>
	</TouchableHighlight>
)

let styles = StyleSheet.create({
	item: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	border: {
		borderLeftWidth: 1,
		borderLeftColor: '#dddddd'
	},
	itemText: {
		color: '#777777',
		fontSize: 16,
	},
	selected: {
		backgroundColor: '#ffffff'
	}
})

export default TabBarItem
