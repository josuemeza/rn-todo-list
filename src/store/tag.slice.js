import { createSlice } from "@reduxjs/toolkit"
import { fetchTags } from "../data/tags"

export const tagSlice = createSlice({
	name: 'tag',
	initialState: {
		list: [],
		loading: false
	},
	reducers: {
		setList: (state, action) => {
			state.list = action.payload
		},
		pushTag: (state, action) => {
			state.list.push(action.payload)
		},
		replaceTag: (state, action) => {
			state.list = state.list
				.map(i => i.key === action.payload.key ? action.payload : i)
		},
		removeTag: (state, action) => {
			state.list = state.list
				.filter(i => i.key !== action.payload.key)
		},
		setLoading: (state, action) => {
			state.loading = action.payload
		}
	}
})

export const loadTags = () => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true))
			const { data } = await fetchTags()
			if(data) {
				const list = Object.keys(data).map(key => ({
					key,
					title: data[key].title
				}))
				dispatch(setList(list))
			}
		} catch(error) {
			console.log(error)
		} finally {
			dispatch(setLoading(false))
		}
	}
}
export const addTag = (tag) => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true))
			const { title } = tag
			const newData = { title }
			const { data } = await fetchTags({
				method: "POST",
				body: newData
			})
			dispatch(pushTag({
				key: data.name,
				...newData
			}))
		} catch(error) {
			console.log(error)
		} finally {
			dispatch(setLoading(false))
		}
	}
}
export const editTag = (tag) => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true))
			const { key, title } = tag
			const newData = { title, checked }
			await fetchTags({ method: "PUT", key, body: newData })
			dispatch(replaceTag(tag))
		} catch(error) {
			console.log(error)
		} finally {
			dispatch(setLoading(false))
		}
	}
}
export const deleteTag = (tag) => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true))
			const { key } = tag
			await fetchTags({ method: "DELETE", key })
			dispatch(removeTag({ key }))
		} catch(error) {
			console.log(error)
		} finally {
			dispatch(setLoading(false))
		}
	}
}

export const { setList, pushTag, replaceTag, removeTag, setLoading } = tagSlice.actions
export default tagSlice.reducer
