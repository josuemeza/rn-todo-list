import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Input } from '../atoms'

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
		<View>
			<Input
				placeholder="New tag"
				value={tagTitle}
				onChangeText={setTagTitle}
			/>
			<View style={styles.buttonBar}>
				<Button variant="primary" onPress={() => handleAdd()}>
					{'Add'}
				</Button>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	buttonBar: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	}
})

export default TagForm
