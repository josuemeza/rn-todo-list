import { createSlice } from "@reduxjs/toolkit"
import { todos } from "../data/todos"

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		nextKey: 4,
		list: todos,
	},
	reducers: {
		addTodo: (state, action) => {
			state.nextKey += 1
			state.list = [
				...state.list,
				{
					key: state.nextKey,
					title: action.payload.title,
					checked: false
				}
			]
		},
		editTodo: (state, action) => {
			state.list = state.list
				.map(i => i.key === action.payload.key ? action.payload : i)
		},
		deleteTodo: (state, action) => {
			state.list = state.list
				.filter(i => i.key !== action.payload.key)
		}
	}
})

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
