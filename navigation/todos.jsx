import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TodoList } from '../screens/TodoList'
import { TodoSingle } from '../screens/TodoSingle'
import theme from '../constants/theme'

const Stack = createNativeStackNavigator()

const DEFAULT_TODO_LIST = [
	{ key: 1, title: '1st check', checked: true },
	{ key: 2, title: '2nd check', checked: false },
	{ key: 3, title: '3th check', checked: false },
]

export const TodoListNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="List"
			screenOptions={{
				headerStyle: {
					backgroundColor: theme.header.color.background,
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
		>
			<Stack.Screen
				name="List"
				component={TodoList}
				options={{ title: 'To-do list' }}
				initialParams={{
					todoList: DEFAULT_TODO_LIST,
				}}
			/>
			<Stack.Screen
				name="Single"
				component={TodoSingle}
				options={({
					route: {
						params: { todo },
					},
				}) => ({
					title: todo.title,
				})}
			/>
		</Stack.Navigator>
	)
}

export default TodoListNavigator
