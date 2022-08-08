import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Text, StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { Button, Card } from '../components/atoms'
import { CredentialsForm } from '../components/molecules'
import { initSession, signIn, signUp, guestSignIn } from '../store/session.slice'

export const Auth = () => {
	const dispatch = useDispatch()
	const [isSignIn, setIsSignIn] = useState(true)

	const handleSignIn = (user, pass) => dispatch(signIn(user, pass))
	const handleSignUp = (user, pass) => dispatch(signUp(user, pass))
	const handleGuestSignIn = () => dispatch(guestSignIn())
	const toggleIsSignIn = () => setIsSignIn((value) => !value)
	const prompt = isSignIn ? 'Do you want to register?' : 'Already have an account?'

	useEffect(() => {
		dispatch(initSession())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<KeyboardAvoidingView style={styles.containerKeyboard} behavior="height">
			<View style={styles.container}>
				<Card>
					<CredentialsForm
						title={isSignIn ? 'Sign in' : 'Register'}
						onSubmit={isSignIn ? handleSignIn : handleSignUp}
					/>
				</Card>
				<Text style={styles.propmt}>{prompt}</Text>
				<View style={styles.buttonContainer}>
					<Button variant="link" onPress={toggleIsSignIn}>
						{isSignIn ? 'Register' : 'Sign in'}
					</Button>
					<Text>or</Text>
					<Button variant="link" onPress={handleGuestSignIn}>
						Enter as guest
					</Button>
				</View>
			</View>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	containerKeyboard: {},
	container: {
		padding: 16,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 6,
	},
	propmt: {
		textAlign: 'center',
	},
})

export default Auth
