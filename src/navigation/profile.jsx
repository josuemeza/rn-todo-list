import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Profile } from '../screens'
import theme from '../constants/theme'

const Stack = createNativeStackNavigator()

export const ProfileNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="ProfileScreen"
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
			<Stack.Screen name="ProfileScreen" component={Profile} options={{ title: 'Profile' }} />
		</Stack.Navigator>
	)
}

export default ProfileNavigator
