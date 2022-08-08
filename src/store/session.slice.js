import { createSlice } from "@reduxjs/toolkit"
import { fetchAuth } from "../data/auth"

export const tagSlice = createSlice({
	name: 'session',
	initialState: {
		loading: false,
		user: null,
		token: null,
	},
	reducers: {
		guestSignIn: (state) => {
			state.user = { username: "Guest user" }
		},
		setUser: (state, action) => {
			state.user = action.payload
		},
		setLoading: (state, action) => {
			state.loading = action.payload
		},
		setToken: (state, action) => {
			state.token = action.payload
		}
	}
})

export const signIn = (username, password) => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true))
			const { data } = await fetchAuth({
				credentials: { username, password }
			})
			const { idToken, localId } = data
			if(idToken && localId) {
				dispatch(setUser({ uid: localId, username }))
				dispatch(setToken(idToken))
			}
		} catch(error) {
			console.error(error)
		} finally {
			dispatch(setLoading(false))
		}
	}
}

export const signUp = (username, password) => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true))
			const { data } = await fetchAuth({
				signUp: true,
				credentials: { username, password }
			})
			const { idToken, localId } = data
			if(idToken && localId) {
				dispatch(setUser({ uid: localId, username }))
				dispatch(setToken(idToken))
			}
		} catch(error) {
			console.error(error)
		} finally {
			dispatch(setLoading(false))
		}
	}
}

export const signOut = () => {
	return async (dispatch) => {
		dispatch(setUser(null))
		dispatch(setToken(null))
	}
}

export const { setUser, setLoading, setToken, guestSignIn } = tagSlice.actions
export default tagSlice.reducer
