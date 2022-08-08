import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Auth } from "../screens"

const Stack = createNativeStackNavigator()

export const AuthNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="AuthScreen"
		>
			<Stack.Screen
				name="AuthScreen"
				component={Auth}
				options={{ title: "Auth screen" }}
			/>
		</Stack.Navigator>
	)
}

export default AuthNavigator
