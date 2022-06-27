import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from './Button'
import theme from '../constants/theme'

export const TagListItem = ({ tag, onRemoveTag }) => {
	return (
		<View style={styles.container}>
			<Text>{tag.title}</Text>
			<Button variant="danger" style={styles.rounded} onPress={() => onRemoveTag(tag)}>
				X
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: theme.list.color.separator,
		minHeight: 50,
	},
	rounded: {
		borderRadius: 32,
	},
})

export default TagListItem
