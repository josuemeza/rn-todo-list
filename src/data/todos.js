import { URL_API } from "../constants/database/firebase"

const DEFAULT_METHOD = "GET"
const SERVICE_NAME = "todos"

export const fetchTodos = async (params) => {
	const {
		method,
		key,
		body
	} = {
		method: DEFAULT_METHOD,
		...params
	}
	const singleKey = key ? `/${key}` : ""
	const requestBody = body ? JSON.stringify(body) : undefined
	const response = await fetch(`${URL_API}/${SERVICE_NAME}${singleKey}.json`, {
		method,
		headers: {
			"Content-Type": "application/json"
		},
		body: requestBody
	})
	const data = await response.json()
	return { response, data }
}
