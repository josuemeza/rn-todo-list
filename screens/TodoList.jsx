import React, { useState } from 'react'
import { StyleSheet, View, Modal, FlatList } from 'react-native'
import { TodoForm } from '../components/TodoForm'
import { TodoListItem } from '../components/TodoListItem'
import { RemoveTodoConfirmModal } from '../components/RemoveTodoConfirmModal'
import { Header } from '../components/Header'
import { Card } from '../components/Card'
import theme from '../constants/theme'

const DEFAULT_TODO_LIST = [
	{ key: 1, title: '1st check', checked: true },
	{ key: 2, title: '2nd check', checked: false },
	{ key: 3, title: '3th check', checked: false },
]

export const TodoList = ({ onSelectTodo }) => {
	const [list, setList] = useState(DEFAULT_TODO_LIST)
	const [, setNextTodoKey] = useState(DEFAULT_TODO_LIST.length + 1)
	const [todoToRemove, setTodoToRemove] = useState()

	const handleAdd = (newTodo) => {
		setNextTodoKey((key) => {
			setList((prev) => [{ ...newTodo, key }, ...prev])
			return key + 1
		})
	}

	const handleCheck = (todo) => {
		setList((prev) => {
			return prev.map((item) => {
				return item.key === todo.key ? todo : item
			})
		})
	}

	const handleRemove = () => {
		setTodoToRemove((todo) => {
			setList((prev) => {
				return prev.filter((item) => item.key !== todo.key)
			})
		})
	}

	return (
		<View style={styles.container}>
			<Header title="To-do list" />
			<View style={styles.content}>
				<Card>
					<TodoForm onAdd={handleAdd} />
				</Card>
				<Card>
					<FlatList
						data={list}
						renderItem={({ item }) => (
							<TodoListItem
								todo={item}
								onPress={() => onSelectTodo(item)}
								onCheckTodo={handleCheck}
								onRemoveTodo={setTodoToRemove}
							/>
						)}
						keyExtractor={(item) => item.key}
					/>
				</Card>
			</View>
			<Modal animationType="slide" visible={Boolean(todoToRemove)}>
				<RemoveTodoConfirmModal
					todo={todoToRemove}
					onConfirm={handleRemove}
					onCancel={() => setTodoToRemove(undefined)}
				/>
			</Modal>
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
})

export default TodoList
