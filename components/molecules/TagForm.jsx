import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Input } from '../atoms'
import theme from '../../constants/theme'

export const TagForm = ({ onAdd }) => {
	const [tagTitle, setTagTitle] = useState('')

	const handleAdd = () => {
		if (tagTitle) {
			const newTag = {
				key: 0,
				title: tagTitle,
			}
			setTagTitle('')
			onAdd(newTag)
		}
	}

	return (
		<View style={styles.container}>
			<Input placeholder="New tag" value={tagTitle} onChangeText={setTagTitle} />
			<Button variant="primary" onPress={() => handleAdd()}>
				{'Add'}
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	button: {
		backgroundColor: theme.button.color.background.primary,
		paddingVertical: 6,
		paddingHorizontal: 12,
	},
	buttonText: {
		color: theme.button.color.text.primary,
		fontWeight: 'bold',
	},
})

export default TagForm
