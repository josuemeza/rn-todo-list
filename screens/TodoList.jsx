import React, { useState } from 'react'
import { StyleSheet, Alert, View, FlatList } from 'react-native'
import { TodoForm } from '../components/TodoForm'
import { TodoListItem } from '../components/TodoListItem'
import { Card } from '../components/Card'
import theme from '../constants/theme'

const DEFAULT_TODO_LIST = [
	{ key: 1, title: '1st check', checked: true },
	{ key: 2, title: '2nd check', checked: false },
	{ key: 3, title: '3th check', checked: false },
]

export const TodoList = ({ navigation }) => {
	const [list, setList] = useState(DEFAULT_TODO_LIST)
	const [, setNextTodoKey] = useState(DEFAULT_TODO_LIST.length + 1)

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

	const handleRemove = (todo, options = {}) => {
		const {
			title = 'Delete',
			description = `Confirm delete ${todo.title} (${todo.key})?`,
			onConfirm = () => {},
		} = options
		const buttons = [
			{
				text: 'Cancel',
				style: 'cancel',
			},
			{
				text: 'Confirm',
				style: 'destructive',
				onPress: () => {
					setList((prev) => {
						return prev.filter((item) => item.key !== todo.key)
					})
					onConfirm()
				},
			},
		]
		return Alert.alert(title, description, buttons)
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
					<FlatList
						data={list.sort(uncheckedFirstSort)}
						style={styles.list}
						renderItem={({ item }) => (
							<TodoListItem
								todo={item}
								onPress={() => {
									navigation.navigate('Single', {
										todo: item,
										onRemovePress: () =>
											handleRemove(item, {
												onConfirm: () => navigation.goBack(),
											}),
									})
								}}
								onCheckTodo={handleCheck}
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
