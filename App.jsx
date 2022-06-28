import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/store'
import AppNavigation from './src/navigation'

export const App = () => {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<AppNavigation />
				<StatusBar style="auto" />
			</View>
		</Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default App
