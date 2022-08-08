import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TodoForm, TodoList, TodoSingle } from '../screens'
import { Ionicons } from '@expo/vector-icons'
import theme from '../constants/theme'
import { Button } from '../components/atoms'

const Stack = createNativeStackNavigator()

export const TodoListNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="ListScreen"
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
				name="ListScreen"
				component={TodoList}
				options={({ navigation }) => ({
					title: 'To-do list',
					headerRight: () => (
						<Button variant="clear" onPress={() => navigation.navigate('FormScreen')}>
							<Ionicons name="add-circle-outline" size={26} color="#FFF" />
						</Button>
					),
				})}
			/>
			<Stack.Screen
				name="SingleScreen"
				component={TodoSingle}
				options={({ route, navigation }) => {
					const {
						params: { key, title },
					} = route
					return {
						title,
						headerRight: () => (
							<Button
								variant="clear"
								onPress={() => {
									navigation.navigate({
										name: 'FormScreen',
										params: { key },
									})
								}}
							>
								<Ionicons name="create-outline" size={26} color="#FFF" />
							</Button>
						),
					}
				}}
			/>
			<Stack.Screen name="FormScreen" component={TodoForm} options={{ title: 'To-do form' }} />
		</Stack.Navigator>
	)
}

export default TodoListNavigator
