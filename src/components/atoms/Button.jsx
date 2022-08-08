import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import theme from '../../constants/theme'

export const Button = ({ variant, style = {}, textStyle = {}, children, onPress }) => {
	const variants = {
		primary: primaryVariantStyles,
		danger: dangerVariantStyles,
		link: linkVariantStyles,
		clear: clearVariantStyles,
	}
	const variantStyles = variants.hasOwnProperty(variant) ? variants[variant] : {}

	return (
		<TouchableOpacity onPress={onPress} style={[styles.container, variantStyles.container, style]}>
			{typeof children === 'string' ? (
				<Text style={[styles.text, variantStyles.text, textStyle]}>{children}</Text>
			) : (
				children
			)}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		minHeight: 36,
		paddingVertical: 6,
		paddingHorizontal: 12,
		backgroundColor: '#BBB',
	},
	text: {
		color: '#FFF',
	},
})

const primaryVariantStyles = StyleSheet.create({
	container: {
		backgroundColor: theme.button.color.background.primary,
	},
	text: {
		color: theme.button.color.text.primary,
		fontWeight: 'bold',
	},
})

const dangerVariantStyles = StyleSheet.create({
	container: {
		backgroundColor: theme.button.color.background.danger,
	},
	text: {
		color: theme.button.color.text.primary,
		fontWeight: 'bold',
	},
})

const linkVariantStyles = StyleSheet.create({
	container: {
		marginHorizontal: theme.button.margin.small,
		backgroundColor: theme.button.color.background.link,
	},
	text: {
		fontSize: theme.button.font.size.body,
		color: theme.button.color.text.link,
		textDecorationLine: 'underline',
	},
})

const clearVariantStyles = StyleSheet.create({
	container: {
		backgroundColor: 'transparent',
		padding: 0,
		margin: 0,
	},
})

export default Button
