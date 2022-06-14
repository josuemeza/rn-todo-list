import React from 'react'
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native'

export const TodoListItem = ({ todo, onCheckTodo, onRemoveTodo }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => onRemoveTodo(todo)} style={styles.removeButton}>
				<Text style={styles.removeButtonText}>X</Text>
			</TouchableOpacity>
			<Text style={styles.text}>{todo.title}</Text>
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
		borderColor: '#BBB',
	},
	removeButton: {
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#f00',
		borderWidth: 1,
		borderRadius: 12,
		width: 24,
		height: 24,
	},
	removeButtonText: {
		color: '#f00',
	},
	text: {
		flex: 1,
		fontSize: 16,
		marginHorizontal: 16,
	},
})

export default TodoListItem
