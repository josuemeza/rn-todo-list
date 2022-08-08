import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "../components/atoms"
import { signOut } from "../store/session.slice"


export const Profile = () => {
	const dispatch = useDispatch()
	const user = useSelector(state => state.session.user)
	const token = useSelector(state => state.session.token)

	const handleSignOut = () => {
		dispatch(signOut())
	}

	return (
		<View style={styles.container}>
			<View style={styles.buttonBar}>
				<Button variant="danger" onPress={() => handleSignOut()}>Sign out</Button>
			</View>
			<Text>UID: { user.uid }</Text>
			<Text>User: { user.username }</Text>
			<Text>Token: { token }</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		margin: 16
	},
	buttonBar: {
		flexDirection: "row",
		justifyContent: "center",
		marginBottom: 16
	}
})

export default Profile
