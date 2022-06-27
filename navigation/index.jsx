import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './tab'

export const AppNavigation = () => {
	return (
		<NavigationContainer>
			<TabNavigator />
		</NavigationContainer>
	)
}

export default AppNavigation
