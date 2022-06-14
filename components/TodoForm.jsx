import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

export const TodoForm = ({ onAdd }) => {
	const [todoTitle, setTodoTitle] = useState('')
	const handleAdd = () => {
		const newTodo = {
			key: 0,
			title: todoTitle,
			checked: false,
		}
		setTodoTitle('')
		onAdd(newTodo)
	}
	return (
		<View style={styles.container}>
			<TextInput
				placeholder="New to-do"
				value={todoTitle}
				onChangeText={setTodoTitle}
				style={styles.input}
			/>
			<Button title="Add" onPress={() => handleAdd()} disabled={!todoTitle} />
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
})

export default TodoForm
