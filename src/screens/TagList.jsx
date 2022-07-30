import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, StyleSheet, View, Alert, FlatList } from 'react-native'
import { loadTags, addTag, deleteTag } from '../store/tag.slice'
import { Card } from '../components/atoms'
import { TagForm, TagListItem } from '../components/molecules'
import theme from '../constants/theme'

export const TagList = () => {
	const dispatch = useDispatch()
	const isLoading = useSelector((state) => state.tag.loading)
	const tagList = useSelector((state) => state.tag.list)

	useEffect(() => {
		dispatch(loadTags())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleAdd = (tag) => {
		dispatch(addTag(tag))
	}

	const handleRemove = (tag) => {
		const title = 'Delete'
		const description = `Confirm delete ${tag.title} (${tag.key})?`
		const cancelButton = {
			text: 'Cancel',
			style: 'cancel',
		}
		const confirmButton = {
			text: 'Confirm',
			style: 'destructive',
			onPress: () => {
				dispatch(deleteTag(tag))
			},
		}
		return Alert.alert(title, description, [cancelButton, confirmButton])
	}

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Card style={styles.formCard}>
					<TagForm onAdd={handleAdd} />
				</Card>
				<Card style={styles.listCard}>
					<Text>{isLoading ? 'Requesting data' : 'Up to date'}</Text>
					<FlatList
						data={tagList}
						style={styles.list}
						renderItem={({ item }) => (
							<TagListItem tag={item} onRemoveTag={() => handleRemove(item)} />
						)}
						keyExtractor={(item) => item.key}
					/>
				</Card>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.screen.color.background,
	},
	content: {
		flex: 1,
		margin: theme.screen.margin.small,
	},
	listCard: {
		flex: 1,
	},
})

export default TagList
