import React from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'

export const Input = ({ variant, placeholder, value, onChangeText, error, style }) => {
	const variants = {
		email: { props: emailVariantProps },
		password: { props: passwordVariantProps }
	}

	const variantParams = variants.hasOwnProperty(variant)
		? variants[variant].props
		: {}

	const textInputStyles = [
		styles.input,
		error ? errorVariantStyles.input : {},
		style
	]

	return (
		<View>
			<TextInput
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				style={textInputStyles}
				{ ...variantParams }
			/>
			{ error && (
				<Text style={styles.errorLabel}>{ error }</Text>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		borderBottomWidth: 1,
		borderBottomColor: '#6B4E71',
		backgroundColor: '#FFF',
		padding: 4,
		marginVertical: 6,
		minHeight: 36
	},
	errorLabel: {
		fontSize: 12,
		color: "#F00"
	}
})

const emailVariantProps = {
	keyboardType: 'email-address',
	autoCapitalize: 'none',
	autoCorrect: false
}

const passwordVariantProps = {
	secureTextEntry: true
}

const errorVariantStyles = StyleSheet.create({
	input: {
		borderBottomColor: '#F00',
		color: "#F00"
	},
})

export default Input
