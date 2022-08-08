import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card } from '../components/atoms'
import theme from '../constants/theme'

export const TodoSingle = ({ route }) => {
	const { key } = route.params
	const todo = useSelector((state) => state.todo.list.find((i) => i.key === key))

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
					{ todo.photo && (
						<Image source={{ uri: todo.photo }} style={styles.image}/>
					)}
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
	image: {
		height: 240
	},
})

export default TodoSingle
