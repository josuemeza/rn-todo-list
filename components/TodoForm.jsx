import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native'
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
			<TouchableOpacity style={styles.button} onPress={() => handleAdd()}>
				<Text style={styles.buttonText}>Add</Text>
			</TouchableOpacity>
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
