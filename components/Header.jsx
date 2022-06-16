import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import theme from '../constants/theme'

export const Header = ({ title, onBackPress }) => {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				{onBackPress && (
					<TouchableOpacity style={styles.backButton} onPress={onBackPress}>
						<Text style={styles.backButtonText}>{'< Back'}</Text>
					</TouchableOpacity>
				)}
				<Text style={styles.title}>{title}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 40,
		backgroundColor: theme.header.color.background,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		minHeight: 68,
		paddingHorizontal: 12,
	},
	backButton: {
		marginRight: 16,
		height: 32,
		justifyContent: 'center',
		alignItems: 'center',
	},
	backButtonText: {
		color: '#FFF',
		fontSize: 16,
	},
	title: {
		color: '#FFF',
		fontSize: 32,
		fontWeight: 'bold',
	},
})

export default Header
