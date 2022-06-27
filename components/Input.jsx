import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export const Input = ({ placeholder, value, onChangeText, style }) => {
	return (
		<TextInput
			placeholder={placeholder}
			value={value}
			onChangeText={onChangeText}
			style={[styles.input, style]}
		/>
	)
}

const styles = StyleSheet.create({
	input: {
		flex: 1,
		borderBottomWidth: 1,
		borderBottomColor: '#6B4E71',
		backgroundColor: '#FFF',
		padding: 4,
		marginRight: 12,
	},
})

export default Input
