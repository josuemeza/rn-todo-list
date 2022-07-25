import { createSlice } from "@reduxjs/toolkit"
import { tags } from "../data/tags"

export const tagSlice = createSlice({
	name: 'tag',
	initialState: {
		nextKey: tags.reduce((p, c) => p.key >= c.key ? p : c).key + 1,
		list: tags
	},
	reducers: {
		addTag: (state, action) => {
			state.nextKey += 1
			state.list = [
				...state.list,
				{
					key: state.nextKey,
					title: action.payload.title
				}
			]
		},
		editTag: (state, action) => {
			state.list = state.list
				.map(i => i.key === action.payload.key ? action.payload : i)
		},
		deleteTag: (state, action) => {
			state.list = state.list
				.filter(i => i.key !== action.payload.key)
		}
	}
})

export const { addTag, editTag, deleteTag } = tagSlice.actions
export default tagSlice.reducer
