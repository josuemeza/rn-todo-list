import { todoTypes } from "../types/todo.types"

const { ADD_TODO, DELETE_TODO, EDIT_TODO } = todoTypes

export const addTodo = (todo) => ({ type: ADD_TODO, todo })
export const deleteTodo = (todo) => ({ type: DELETE_TODO, todo })
export const editTodo = (todo) => ({ type: EDIT_TODO, todo })