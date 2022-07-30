import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, StyleSheet, Alert, View, FlatList } from 'react-native'
import { loadTodos, addTodo, deleteTodo, editTodo } from '../store/todo.slice'
import { TodoForm, TodoListItem } from '../components/molecules'
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

	const handleAdd = (todo) => {
		dispatch(addTodo(todo))
	}

	const handleSelect = (todo) => {
		navigation.navigate({
			name: 'Single',
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

	const uncheckedFirstSort = (left, right) =>
		left.checked === right.checked ? 0 : left.checked ? 1 : -1

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Card style={styles.formCard}>
					<TodoForm onAdd={handleAdd} />
				</Card>
				<Card style={styles.listCard}>
					<Text>{isLoading ? 'Requesting data' : 'Up to date'}</Text>
					<FlatList
						data={[...todoList].sort(uncheckedFirstSort)}
						style={styles.list}
						renderItem={({ item }) => (
							<TodoListItem
								todo={item}
								onPress={() => handleSelect(item)}
								onCheckTodo={({ checked }) => handleCheck({ ...item, checked })}
								onRemoveTodo={() => handleRemove(item)}
							/>
						)}
						keyExtractor={(item) => item.key}
					/>
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
		flex: 1,
		margin: theme.screen.margin.small,
	},
	listCard: {
		flex: 1,
	},
})

export default TodoList
