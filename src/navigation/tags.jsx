import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TagList } from '../screens'
import theme from '../constants/theme'

const Stack = createNativeStackNavigator()

export const TagListNavigator = () => {
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
			<Stack.Screen name="ListScreen" component={TagList} options={{ title: 'Tags' }} />
		</Stack.Navigator>
	)
}

export default TagListNavigator
