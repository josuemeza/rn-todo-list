import { URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP } from "../constants/database/firebase"

export const fetchAuth = async (params) => {
	const {
		signUp,
		credentials: {
			username,
			password
		}
	} = {
		signUp: false,
		...params
	}
	if(!username || !password) {
		throw Error("Missing credentials")
	}
	const url = signUp
		? URL_AUTH_SIGN_UP
		: URL_AUTH_SIGN_IN
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			email: username,
			password,
			returnSecureToken: true
		})
	})
	const data = await response.json()
	return { response, data }
}
