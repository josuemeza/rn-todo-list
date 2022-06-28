import { createStore, combineReducers } from 'redux'
import tagReducer from './reducers/tag.reducer'
import todoReducer from './reducers/todo.reducer'

const RootReducer = combineReducers({
  todo: todoReducer,
  tag: tagReducer,
})

export default createStore(RootReducer)