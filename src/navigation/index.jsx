import React from 'react'
import { useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './tab'
import AuthNavigator from './auth'

export const AppNavigation = () => {
	const user = useSelector(state => state.session.user)
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<NavigationContainer>
				{ user
					? <TabNavigator />
					: <AuthNavigator />
				}
			</NavigationContainer>
		</SafeAreaView>
	)
}

export default AppNavigation
