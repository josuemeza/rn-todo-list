import React from 'react'
import { StyleSheet, View, Switch } from 'react-native'
import { Button } from './Button'
import theme from '../constants/theme'

export const TodoListItem = ({ todo, onPress, onCheckTodo, onRemoveTodo }) => {
	return (
		<View style={styles.container}>
			<Button variant="danger" style={styles.rounded} onPress={() => onRemoveTodo(todo)}>
				X
			</Button>
			<Button variant="link" onPress={onPress}>
				{todo.title}
			</Button>
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
		minHeight: 50,
	},
	rounded: {
		borderRadius: 32,
	},
})

export default TodoListItem
