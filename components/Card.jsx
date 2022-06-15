import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Card = ({ children }) => {
	return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		borderColor: '#BBB',
		borderWidth: 1,
		borderRadius: 6,
		padding: 12,
		marginBottom: 12,
	},
	bold: {
		fontWeight: 'bold',
	},
})

export default Card
