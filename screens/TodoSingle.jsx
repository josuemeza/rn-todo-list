import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Header } from '../components/Header'
import { Card } from '../components/Card'
import theme from '../constants/theme'

export const TodoSingle = ({ todo, onBackPress }) => {
	return (
		<View style={styles.container}>
			<Header title="To-do detail" onBackPress={onBackPress} />
      <View style={styles.content}>
        <Card>
          <View style={styles.inforow}>
            <Text style={styles.titleText}>Key</Text>
            <Text>{todo.key}</Text>
          </View>
          <View style={styles.inforow}>
            <Text style={styles.titleText}>Title</Text>
            <Text>{todo.title}</Text>
          </View>
          <View style={styles.inforow}>
            <Text style={styles.titleText}>State</Text>
            <Text>{todo.checked ? 'Checked' : 'Unchecked'}</Text>
          </View>
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
		margin: theme.screen.margin.small,
  },
  titleText: {
    fontWeight: 'bold',
  },
  inforow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: theme.list.color.separator,
  },
})

export default TodoSingle
