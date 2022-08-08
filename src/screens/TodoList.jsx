import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, StyleSheet, Alert, View, FlatList } from 'react-native'
import { loadTodos, deleteTodo, editTodo } from '../store/todo.slice'
import { TodoListItem } from '../components/molecules'
import { Card } from '../components/atoms'
import theme from '../constants/theme'

export const TodoList = ({ navigation }) => {
	const dispatch = useDispatch()
	const isLoading = useSelector((state) => state.todo.loading)
	const todoList = useSelector((state) => state.todo.list)

	useEffect(() => {
		dispatch(loadTodos())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleSelect = (todo) => {
		navigation.navigate({
			name: 'SingleScreen',
			params: {
				key: todo.key,
				title: todo.title,
			},
		})
	}

	const handleSelectForEdit = (todo) => {
		navigation.navigate({
			name: 'FormScreen',
			params: {
				key: todo.key,
				title: todo.title,
			},
		})
	}

	const handleCheck = (todo) => {
		dispatch(editTodo(todo))
	}

	const handleRemove = (todo) => {
		const title = 'Delete'
		const description = `Confirm delete ${todo.title} (${todo.key})?`
		const cancelButton = {
			text: 'Cancel',
			style: 'cancel',
		}
		const confirmButton = {
			text: 'Confirm',
			style: 'destructive',
			onPress: () => dispatch(deleteTodo(todo)),
		}
		return Alert.alert(title, description, [cancelButton, confirmButton])
	}

	const uncheckedFirstSort = (left, right) => {
		if (left.checked === right.checked) {
			return 0
		} else {
			return left.checked ? 1 : -1
		}
	}

	const status = isLoading ? 'Requesting data' : 'Up to date'

	return (
		<View style={styles.container}>
			<View style={styles.statusBar}>
				<Text style={styles.statusTitle}>Status:</Text>
				<Text>{status}</Text>
			</View>
			<View style={styles.listCard}>
				<FlatList
					data={[...todoList].sort(uncheckedFirstSort)}
					style={styles.list}
					renderItem={({ item }) => (
						<TodoListItem
							todo={item}
							onPress={() => handleSelect(item)}
							onCheckTodo={({ checked }) => handleCheck({ ...item, checked })}
							onRequestEdit={() => handleSelectForEdit(item)}
							onRemoveTodo={() => handleRemove(item)}
						/>
					)}
					keyExtractor={(item) => item.key}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.screen.color.background,
		paddingHorizontal: 16,
	},
	statusBar: {
		flexDirection: 'row',
		margin: 6,
	},
	statusTitle: {
		fontWeight: 'bold',
		marginRight: 6,
	},
	listCard: {
		flex: 1,
	},
})

export default TodoList
