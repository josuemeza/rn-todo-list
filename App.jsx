import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { TodoList } from './screens/TodoList'
import { TodoSingle } from './screens/TodoSingle'

export const App = () => {
  const [ todo, setTodo ] = useState()

  const screen = todo ? (
    <TodoSingle todo={todo} onBackPress={() => setTodo(undefined)}/>
  ) : (
    <TodoList onSelectTodo={setTodo} />
  )

  return (
    <View style={styles.container}>
      { screen }
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App