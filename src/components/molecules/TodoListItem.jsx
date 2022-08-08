import React from 'react'
import { StyleSheet, View, Switch, Image, Text } from 'react-native'
import { Button, Card } from '../atoms'
import { Ionicons } from '@expo/vector-icons'

export const TodoListItem = ({ todo, onPress, onCheckTodo, onRequestEdit, onRemoveTodo }) => {
	const handleEditPress = () => onRequestEdit(todo)
	const handleDeletePress = () => onRemoveTodo(todo)

	return (
		<Card style={styles.container}>
			<View style={styles.buttonBar}>
				<View style={styles.actionButtons}>
					<Button variant="clear" onPress={handleEditPress}>
						<Ionicons name="create" color="#008000" size={24}/>
					</Button>
					<Button variant="clear" onPress={handleDeletePress}>
						<Ionicons name="trash" color="#F00" size={24}/>
					</Button>
				</View>
				<Switch
					onValueChange={() => onCheckTodo({ ...todo, checked: !todo.checked })}
					value={todo.checked}
				/>
			</View>
			<Button variant="clear" onPress={onPress}>
				{ todo.photo && (
					<Image source={{ uri: todo.photo }} style={styles.image}/>
				)}
				<Text style={styles.titleLabel}>{todo.title}</Text>
			</Button>
		</Card>
	)
}

const styles = StyleSheet.create({
	container: {
	},
	image: {
		height: 180
	},
	buttonBar: {
		flexDirection: "row"
	},
	actionButtons: {
		flex: 1,
		flexDirection: "row"
	},
	titleLabel: {
		fontSize: 25,
	}
})

export default TodoListItem
