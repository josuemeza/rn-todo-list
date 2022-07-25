import { configureStore } from "@reduxjs/toolkit"
import todoSliceReducer from "./todo.slice"
import tagSliceReducer from "./tag.slice"

export const store = configureStore({
	reducer: {
		todo: todoSliceReducer,
		tag: tagSliceReducer
	}
})
