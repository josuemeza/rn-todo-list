import React, { useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Button } from './Button'
import theme from '../constants/theme'

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
			<TextInput
				placeholder="New to-do"
				value={todoTitle}
				onChangeText={setTodoTitle}
				style={styles.input}
			/>
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
	input: {
		flex: 1,
		borderBottomWidth: 1,
		borderBottomColor: '#6B4E71',
		backgroundColor: '#FFF',
		padding: 4,
		marginRight: 12,
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
