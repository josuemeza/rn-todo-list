import { URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP } from "../constants/database/firebase"

export const SIGN_IN = 'SIGN_IN'
export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN_TOKEN = 'SIGN_IN_TOKEN'

export const fetchAuth = async (params) => {
	const {
		type,
		credentials: {
			username,
			password
		}
	} = {
		type: SIGN_IN,
		...params
	}
	if(type === SIGN_IN && (!username || !password)) {
		throw Error("Missing credentials")
	}
	if(type === SIGN_UP && (!username || !password)) {
		throw Error("Missing credentials")
	}
	const urls = {
		SIGN_IN: URL_AUTH_SIGN_IN,
		SIGN_UP: URL_AUTH_SIGN_UP
	}
	const url = urls[type]
	if(!url) throw Error(`${type} type not found`)
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
