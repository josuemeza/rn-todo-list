import React from 'react'
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native'
import theme from '../constants/theme'

export const TodoListItem = ({ todo, onPress, onCheckTodo, onRemoveTodo }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => onRemoveTodo(todo)} style={styles.removeButton}>
				<Text style={styles.removeButtonText}>X</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={onPress} style={styles.titleButton}>
				<Text style={styles.titleButtonText}>{todo.title}</Text>
			</TouchableOpacity>
			<Switch
				onValueChange={() => onCheckTodo({ ...todo, checked: !todo.checked })}
				value={todo.checked}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: theme.list.color.separator,
	},
	removeButton: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.button.color.background.danger,
		borderRadius: theme.button.size.small / 2,
		width: theme.button.size.small,
		height: theme.button.size.small,
	},
	removeButtonText: {
		color: theme.button.color.text.danger,
	},
	titleButton: {
		flex: 1,
		marginHorizontal: 16,
	},
	titleButtonText: {
		fontSize: 16,
		color: theme.button.color.text.link,
		textDecorationLine: 'underline',
	},
})

export default TodoListItem
