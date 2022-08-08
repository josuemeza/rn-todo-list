import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('user.db')

export const init = () => {
	return new Promise((resolve, reject) => {
		db.transaction(tx => {
			tx.executeSql(
				'CREATE TABLE IF NOT EXISTS user (uid TEXT NO NULL, username TEXT NO NULL, token TEXT NOT NULL)',
				[],
				() => resolve(),
				(_, err) => reject(err)
			)
		})
	})
}

export const clearUser = () => {
	return new Promise((resolve, reject) => {
		db.transaction(tx => {
			tx.executeSql(
				'DELETE FROM user',
				[],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			)
		})
	})
}

export const setUser = (uid, username, token) => {
	return new Promise((resolve, reject) => {
		db.transaction(tx => {
			tx.executeSql('DELETE FROM user')
			tx.executeSql(
				'INSERT INTO user (uid, username, token) VALUES (?, ?, ?)',
				[uid, username, token],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			)
		})
	})
}

export const getUser = () => {
	return new Promise((resolve, reject) => {
		db.transaction(tx => {
			tx.executeSql(
				'SELECT * FROM user',
				[],
				(_, result) => {
					resolve(result)
				},
				(_, err) => {
					reject(err)
				}
			)
		})}
	)
}
