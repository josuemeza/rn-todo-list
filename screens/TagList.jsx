import React, { useState } from 'react'
import { StyleSheet, View, Alert, FlatList } from 'react-native'
import { Card } from '../components/Card'
import { TagForm } from '../components/TagForm'
import { TagListItem } from '../components/TagListItem'
import theme from '../constants/theme'

export const TagList = ({ navigation, route }) => {
	const {
		params: { tagList },
	} = route
	const [, setNextTodoKey] = useState(tagList.length + 1)

	const handleAdd = (newTag) => {
		setNextTodoKey((key) => {
			navigation.setParams({
				tagList: [{ ...newTag, key }, ...tagList],
			})
			return key + 1
		})
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
				navigation.setParams({
					tagList: tagList.filter((item) => item.key !== tag.key),
				})
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
