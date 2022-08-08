import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import { Button, Input } from '../atoms'

export const CredentialsForm = ({ title, onSubmit }) => {
	const [email, setEmail] = useState(null)
	const [emailError, setEmailError] = useState(null)
	const [password, setPassword] = useState(null)
	const [passwordError, setPasswordError] = useState(null)

	useEffect(() => {
		email && setEmailError(null)
	}, [email])
	useEffect(() => {
		password && setPasswordError(null)
	}, [password])

	const testEmail = () => {
		const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
		if (!email || !emailRegex.test(email)) {
			setEmailError('Enter a valid email')
			return false
		}
		setEmailError(null)
		return true
	}

	const testPassword = () => {
		if (!password || password.length < 6) {
			setPasswordError('Enter a valid password')
			return false
		}
		setPasswordError(null)
		return true
	}

	const handleSubmit = () => {
		const isValidEmail = testEmail()
		const isValidPassword = testPassword()
		if (isValidEmail && isValidPassword) {
			onSubmit(email, password)
		} else {
			Alert.alert('Validarion issues', 'Check red highlighted inputs', [{ text: 'Close' }])
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title || 'Credentials form'}</Text>
			<Input
				variant="email"
				placeholder="Email"
				value={email || ''}
				onChangeText={setEmail}
				error={emailError}
			/>
			<Input
				variant="password"
				placeholder="Password"
				value={password || ''}
				onChangeText={setPassword}
				error={passwordError}
			/>
			<View style={styles.buttonContainer}>
				<Button variant="primary" onPress={() => handleSubmit()}>
					Submit
				</Button>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 6,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: 6,
	},
	title: {
		fontSize: 24,
		textAlign: 'center',
	},
})

export default CredentialsForm
