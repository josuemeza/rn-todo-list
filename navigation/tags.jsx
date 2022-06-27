import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TagList from '../screens/TagList'
import theme from '../constants/theme'

const Stack = createNativeStackNavigator()

const DEFAULT_TAG_LIST = [
	{ key: 1, title: 'House' },
	{ key: 2, title: 'School' },
	{ key: 3, title: 'Work' },
]

export const TagListNavigator = () => {
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
				component={TagList}
				options={{ title: 'Tags' }}
				initialParams={{
					tagList: DEFAULT_TAG_LIST,
				}}
			/>
		</Stack.Navigator>
	)
}

export default TagListNavigator
