import { todoTypes } from "../types/todo.types"

const { ADD_TODO, DELETE_TODO, EDIT_TODO } = todoTypes

const initialState = {
  nextKey: 4,
  list: [
    { key: 1, title: 'Buy dinner', checked: true },
    { key: 2, title: 'Take son to dentist', checked: false },
    { key: 3, title: 'Clean and wash', checked: false },
  ],
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        nextKey: state.nextKey + 1,
        list: [
          ...state.list,
          {
            key: state.nextKey + 1,
            title: action.todo.title,
            checked: false
          }
        ]
      }
    case EDIT_TODO:
      return {
        nextKey: state.nextKey,
        list: state.list.map(i => i.key === action.todo.key ? action.todo : i )
      }
    case DELETE_TODO:
      return {
        nextKey: state.nextKey,
        list: state.list.filter(i => i.key !== action.todo.key)
      }
    default:
      return state
  }
}

export default todoReducer