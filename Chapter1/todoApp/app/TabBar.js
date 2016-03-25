import React, { View, StyleSheet } from 'react-native'
import TabBarItem from './TabBarItem'

let TabBar = ({ _setType }) => (
	<View style={styles.container}>
    <TabBarItem title='All' _setType={() => _setType('All')} />
    <TabBarItem border title='Active' _setType={() => _setType('Active')} />
    <TabBarItem border title='Complete' _setType={() => _setType('Complete')} />
	</View>
)

let styles = StyleSheet.create({
	container: {
		height: 70,
		flexDirection: 'row',
		borderTopWidth: 1,
		borderTopColor: 'dddddd'
	}
})

export default TabBar
