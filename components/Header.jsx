import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Header = ({ title }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		minHeight: 68,
		paddingHorizontal: 12,
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
	},
})

export default Header
