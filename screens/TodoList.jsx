import React, { useState } from 'react'
import { StyleSheet, Alert, View, FlatList } from 'react-native'
import { TodoForm } from '../components/TodoForm'
import { TodoListItem } from '../components/TodoListItem'
import { Card } from '../components/Card'
import theme from '../constants/theme'

export const TodoList = ({ navigation, route }) => {
	const {
		params: { todoList },
	} = route
	const [, setNextTodoKey] = useState(todoList.length + 1)

	const handleAdd = (newTodo) => {
		setNextTodoKey((key) => {
			navigation.setParams({
				todoList: [{ ...newTodo, key }, ...todoList],
			})
			return key + 1
		})
	}

	const handleCheck = (todo) => {
		navigation.setParams({
			todoList: todoList.map((item) => {
				return item.key === todo.key ? todo : item
			}),
		})
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
			onPress: () => {
				navigation.setParams({
					todoList: todoList.filter((item) => item.key !== todo.key),
				})
			},
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
					<FlatList
						data={todoList?.sort(uncheckedFirstSort)}
						style={styles.list}
						renderItem={({ item }) => (
							<TodoListItem
								todo={item}
								onPress={() => {
									navigation.navigate({
										name: 'Single',
										params: { todo: item },
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
