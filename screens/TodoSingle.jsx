import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Card } from '../components/atoms'
import theme from '../constants/theme'

export const TodoSingle = ({ route }) => {
	const { todo } = route.params

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Card>
					<View style={styles.infoRow}>
						<Text style={styles.titleText}>Key</Text>
						<Text>{todo.key}</Text>
					</View>
					<View style={styles.infoRow}>
						<Text style={styles.titleText}>Title</Text>
						<Text>{todo.title}</Text>
					</View>
					<View style={styles.infoRow}>
						<Text style={styles.titleText}>State</Text>
						<Text>{todo.checked ? 'Checked' : 'Unchecked'}</Text>
					</View>
				</Card>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.screen.color.background,
	},
	content: {
		margin: theme.screen.margin.small,
	},
	titleText: {
		fontWeight: 'bold',
	},
	infoRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: theme.list.margin.small,
		paddingBottom: theme.list.padding.small,
		borderColor: theme.list.color.separator,
		borderBottomWidth: 1,
	},
	buttonBarRow: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
})

export default TodoSingle
