import { configureStore } from "@reduxjs/toolkit"
import sessionSliceReducer from "./session.slice"
import todoSliceReducer from "./todo.slice"
import tagSliceReducer from "./tag.slice"

export const store = configureStore({
	reducer: {
		session: sessionSliceReducer,
		todo: todoSliceReducer,
		tag: tagSliceReducer
	}
})
