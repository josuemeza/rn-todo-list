import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TodoList } from '../screens/TodoList'
import { TodoSingle } from '../screens/TodoSingle'
import theme from '../constants/theme'

const Stack = createNativeStackNavigator()

export const MainNavigator = () => {
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
						params: { todo },
					},
				}) => ({
					title: todo.title,
				})}
			/>
		</Stack.Navigator>
	)
}

export default MainNavigator
