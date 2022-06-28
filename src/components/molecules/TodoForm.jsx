import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Input } from '../atoms'
import theme from '../../constants/theme'

export const TodoForm = ({ onAdd }) => {
	const [todoTitle, setTodoTitle] = useState('')

	const handleAdd = () => {
		if (todoTitle) {
			const newTodo = {
				key: 0,
				title: todoTitle,
				checked: false,
			}
			setTodoTitle('')
			onAdd(newTodo)
		}
	}

	return (
		<View style={styles.container}>
			<Input placeholder="New to-do" value={todoTitle} onChangeText={setTodoTitle} />
			<Button variant="primary" onPress={() => handleAdd()}>
				{'Add'}
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	button: {
		backgroundColor: theme.button.color.background.primary,
		paddingVertical: 6,
		paddingHorizontal: 12,
	},
	buttonText: {
		color: theme.button.color.text.primary,
		fontWeight: 'bold',
	},
})

export default TodoForm
