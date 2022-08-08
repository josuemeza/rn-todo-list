import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, View, Alert, Image } from "react-native"
import * as ImagePicker from "expo-image-picker"
import { Card, Input, Button } from "../components/atoms"
import { addTodo, editTodo } from '../store/todo.slice'

export const TodoForm = ({ route, navigation }) => {
	const { key } = route?.params || {}
	const dispatch = useDispatch()
	const todo = useSelector((state) => state.todo.list.find((i) => i.key === key))
	const isEditing = key && todo
	const [title, setTitle] = useState(isEditing ? todo.title : null)
	const [photo, setPhoto] = useState(isEditing ? todo.photo : null)

	const verifyPermissions = async () => {
		const { status } = await ImagePicker.requestCameraPermissionsAsync()
		if(status !== "granted") {
			Alert.alert(
				"Missing permissions",
				"You must to provide required permissions to use this feature",
				[{ text: "Ok" }]
			)
			return false
		}
		return true
	}

	const handleSave = () => {
		if(isEditing) {
			const edited = {
				...todo,
				title,
				photo
			}
			dispatch(editTodo(edited))
		} else {
			dispatch(addTodo({ title, photo }))
		}
		navigation.goBack()
	}

	const handleSetImage = async () => {
		const isCammeraPermissionGranted = await verifyPermissions()
		if(!isCammeraPermissionGranted) return
		const image = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: 0.7
		})
		setPhoto(image.uri)
	}

	return (
		<View style={styles.container}>
			<Card>
				<Input
					placeholder="New to-do"
					value={title}
					onChangeText={setTitle}
				/>
				<View style={styles.imagePicker}>
					{ photo ? (
						<View style={styles.imageContainer}>
							<Image source={{ uri: photo }} style={styles.image}/>
							<View style={styles.imageContainerButtonBar}>
								<Button variant="link" onPress={() => setPhoto(null)}>
									Remove
								</Button>
							</View>
						</View>
					) : (
						<View style={styles.unsetedImage}>
							<Button variant="link" onPress={handleSetImage}>
								Add an image
							</Button>
						</View>
					)}
				</View>
				<View style={styles.buttonBar}>
					<Button variant="primary" onPress={handleSave}>
						Save
					</Button>
				</View>
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		margin: 16
	},
	buttonBar: {
		flexDirection: "row",
		justifyContent: "flex-end"
	},
	imagePicker: {
		marginBottom: 12
	},
	imageContainer: {
		borderBottomWidth: 1,
		padding: 6
	},
	imageContainerButtonBar: {
		flexDirection: "row",
		justifyContent: "center"
	},
	image: {
		minHeight: 180,
	},
	unsetedImage: {
		flexDirection: "row",
		justifyContent: "center",
		padding: 12,
		borderBottomWidth: 1
	},
})

export default TodoForm
