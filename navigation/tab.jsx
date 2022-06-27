import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import TodoListNavigator from './todos'
import TagListNavigator from './tags'

const BottomTabs = createBottomTabNavigator()

export const TabNavigator = () => {
	return (
		<BottomTabs.Navigator
			initialRouteName="ToDoList"
			screenOptions={{
				headerShown: false,
			}}
		>
			<BottomTabs.Screen
				name="ToDoList"
				component={TodoListNavigator}
				options={{
					tabBarLabel: "To-do's",
					tabBarIcon: ({ focused }) => (
						<Ionicons name={focused ? 'checkbox' : 'checkbox-outline'} size={24} color="black" />
					),
				}}
			/>
			<BottomTabs.Screen
				name="TagList"
				component={TagListNavigator}
				options={{
					tabBarLabel: 'Tags',
					// tabBarIcon: ({ focused }) => {
					// 	const icon = focused ? 'pricetags' : 'pricetags-outline'
					// 	return <Ionicons name={icon} size={24} color="black" />
					// },
				}}
			/>
		</BottomTabs.Navigator>
	)
}

export default TabNavigator
