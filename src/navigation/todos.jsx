import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TodoList, TodoSingle } from '../screens'
import theme from '../constants/theme'

const Stack = createNativeStackNavigator()

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
			<Stack.Screen name="List" component={TodoList} options={{ title: 'To-do list' }} />
			<Stack.Screen
				name="Single"
				component={TodoSingle}
				options={({
					route: {
						params: { title },
					},
				}) => ({
					title,
				})}
			/>
		</Stack.Navigator>
	)
}

export default TodoListNavigator
