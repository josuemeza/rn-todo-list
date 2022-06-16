import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from './Button'

export const RemoveTodoConfirmModal = ({ todo, onConfirm, onCancel }) => {
	return (
		<View style={styles.container}>
			<View style={styles.description}>
				<Text>{'¿Confirma remover el todo '}</Text>
				<Text style={styles.bold}>{todo.title}</Text>
				<Text>{'?'}</Text>
			</View>
			<View style={styles.toolbar}>
				<View style={styles.toolbarButton}>
					<Button variant="primary" onPress={() => onConfirm()}>
						{'Confirm'.toUpperCase()}
					</Button>
				</View>
				<View style={styles.toolbarButton}>
					<Button onPress={() => onCancel()}>{'Cancel'.toUpperCase()}</Button>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	bold: {
		fontWeight: 'bold',
	},
	container: {
		alignItems: 'center',
	},
	description: {
		flexDirection: 'row',
		marginVertical: 24,
	},
	toolbar: {
		flexDirection: 'row',
	},
	toolbarButton: {
		paddingHorizontal: 6,
	},
})

export default RemoveTodoConfirmModal
