import { createSlice } from "@reduxjs/toolkit"
import { fetchAuth } from "../data/auth"
import * as Storage from "../data/storage"

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

export const initSession = () => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true))
			await Storage.init()
			const result = await Storage.getUser()
			const { uid, username, token } = result.rows._array.pop() || {}
			if(uid && token) {
				dispatch(setUser({ uid, username }))
				dispatch(setToken(token))
			}
			console.log("Readed", { uid, username, token })
		} catch(error) {
			console.error(error)
		} finally {
			dispatch(setLoading(false))
		}
	}
}

export const signIn = (username, password) => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true))
			const { data } = await fetchAuth({
				type: 'SIGN_IN',
				credentials: { username, password }
			})
			const { idToken, localId } = data
			if(idToken && localId) {
				await Storage.setUser(localId, username, idToken)
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
				type: "SIGN_UP",
				credentials: { username, password }
			})
			const { idToken, localId } = data
			if(idToken && localId) {
				await Storage.setUser(localId, username, idToken)
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
		await Storage.clearUser()
		dispatch(setUser(null))
		dispatch(setToken(null))
	}
}

export const { setUser, setLoading, setToken, guestSignIn } = tagSlice.actions
export default tagSlice.reducer
