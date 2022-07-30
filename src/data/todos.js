import { URL_API } from "../constants/database/firebase"

export const fetchTodos = async (params) => {
	const {
		method,
		key,
		body
	} = {
		method: "GET",
		...params
	}
	const singleKey = key ? `/${key}` : ""
	const requestBody = body ? JSON.stringify(body) : undefined
	const response = await fetch(`${URL_API}/todos${singleKey}.json`, {
		method,
		headers: {
			"Content-Type": "application/json"
		},
		body: requestBody
	})
	const data = await response.json()
	return { response, data }
}
