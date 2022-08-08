import { createSlice } from "@reduxjs/toolkit"
import { fetchTodos } from "../data/todos"

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		list: [],
		loading: false,
	},
	reducers: {
		setList: (state, action) => {
			state.list = action.payload
		},
		pushTodo: (state, action) => {
			state.list.push(action.payload)
		},
		replaceTodo: (state, action) => {
			state.list = state.list
				.map(i => i.key === action.payload.key ? action.payload : i)
		},
		removeTodo: (state, action) => {
			state.list = state.list
				.filter(i => i.key !== action.payload.key)
		},
		setLoading: (state, action) => {
			state.loading = action.payload
		}
	}
})

export const loadTodos = () => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true))
			const { data } = await fetchTodos()
			if(data) {
				const list = Object.keys(data).map(key => ({
					key,
					title: data[key].title,
					checked: data[key].checked
				}))
				dispatch(setList(list))
			}
		} catch(error) {
			console.error("Error", error)
		} finally {
			dispatch(setLoading(false))
		}
	}
}

export const addTodo = (todo) => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true))
			const { title, checked } = todo
			const newData = { title, checked }
			const { data } = await fetchTodos({ method: "POST", body: newData })
			dispatch(pushTodo({
				key: data.name,
				...newData
			}))
		} catch(error) {
			console.error("Error", error)
		} finally {
			dispatch(setLoading(false))
		}
	}
}

export const editTodo = (todo) => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true))
			const { key, title, checked } = todo
			const newData = { title, checked }
			await fetchTodos({ method: "PUT", key, body: newData })
			dispatch(replaceTodo(todo))
		} catch(error) {
			console.error("Error", error)
		} finally {
			dispatch(setLoading(false))
		}
	}
}

export const deleteTodo = (todo) => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true))
			const { key } = todo
			await fetchTodos({ method: "DELETE", key })
			dispatch(removeTodo({ key }))
		} catch(error) {
			console.error("Error", error)
		} finally {
			dispatch(setLoading(false))
		}
	}
}

export const { setList, pushTodo, replaceTodo, removeTodo, setLoading } = todoSlice.actions
export default todoSlice.reducer
