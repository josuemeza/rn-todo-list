import { tagTypes } from "../types/tag.types"

const { ADD_TAG, DELETE_TAG, EDIT_TAG } = tagTypes

export const addTag = (tag) => ({ type: ADD_TAG, tag })
export const deleteTag = (tag) => ({ type: DELETE_TAG, tag })
export const editTag = (tag) => ({ type: EDIT_TAG, tag })