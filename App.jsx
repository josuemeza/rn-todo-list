import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, View, Modal, FlatList } from 'react-native'
import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TodoListItem } from './components/TodoListItem'
import { RemoveTodoConfirmModal } from './components/RemoveTodoConfirmModal'

const DEFAULT_TODO_LIST = [
  { key: 1, title: "1st check", checked: true },
  { key: 2, title: "2nd check", checked: false },
  { key: 3, title: "3th check", checked: false },
]

export const App = () => {
  const [ list, setList ] = useState(DEFAULT_TODO_LIST)
  const [ _nextTodoKey, setNextTodoKey ] = useState(DEFAULT_TODO_LIST.length + 1)
  const [ todoToRemove, setTodoToRemove ] = useState()
  
  const handleAdd = (newTodo) => {
    setNextTodoKey(key => {
      setList(prev => [
        { ...newTodo, key },
        ...prev,
      ]);
      return key + 1;
    })
  }

  const handleCheck = (todo) => {
    setList(prev => {
      return prev.map( item => {
        return item.key === todo.key
          ? todo
          : item;
      });
    });
  }

  const handleRemove = () => {
    setTodoToRemove(todo => {
      setList(prev => {
        return prev.filter(item => item.key !== todo.key)
      })
    });
  }

  return (
    <View style={styles.container}>
      <Header title="To-do list"/>
      <View style={styles.content}>
        <View style={styles.card}>
          <TodoForm onAdd={handleAdd} />
        </View>
        <View style={styles.card}>
          <FlatList
            data={list}
            renderItem={({ item }) => (
              <TodoListItem
                todo={item}
                onCheckTodo={handleCheck}
                onRemoveTodo={setTodoToRemove}
              />
            )}
            keyExtractor={item => item.key}
          />
        </View>
      </View>
      <Modal
				animationType="slide"
				visible={Boolean(todoToRemove)}
			>
        <RemoveTodoConfirmModal
          todo={todoToRemove}
          onConfirm={handleRemove}
          onCancel={() => setTodoToRemove(undefined)}
        />
			</Modal>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    paddingTop: 40,
		backgroundColor: '#DDD',
  },
  content: {
		margin: 12,
  },
  card: {
		backgroundColor: '#FFF',
		borderColor: '#BBB',
		borderWidth: 1,
		borderRadius: 6,
		padding: 12,
		marginBottom: 12,
	},
})

export default App