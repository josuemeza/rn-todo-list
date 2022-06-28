import { tagTypes } from "../types/tag.types"

const { ADD_TAG, EDIT_TAG, DELETE_TAG } = tagTypes

const initialState = {
  nextKey: 4,
  list: [
    { key: 1, title: 'House' },
    { key: 2, title: 'School' },
    { key: 3, title: 'Work' },
  ]
}

const tagReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TAG:
      return {
        nextKey: state.nextKey + 1,
        list: [
          ...state.list,
          {
            key: state.nextKey + 1,
            title: action.tag.title
          }
        ]
      }
    case EDIT_TAG:
      return {
        nextKey: state.nextKey,
        list: state.list.map(i => i.key === action.tag.key ? action.tag : i)
      }
    case DELETE_TAG:
      return {
        nextKey: state.nextKey,
        list: state.list.filter(i => i.key !== action.tag.key)
      }
    default:
      return state
  }
}

export default tagReducer