import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Header } from '../components/Header'

export const TodoSingle = ({ todo, onBackPress }) => {
	return (
		<View style={styles.container}>
			<Header title="To-do detail" onBackPress={onBackPress} />
			<Text>{todo.title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default TodoSingle
