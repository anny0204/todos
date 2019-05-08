import { combineReducers } from 'redux'
import { default as tasksReducer } from '../tasks/@ducks'

const reducer = combineReducers({
    tasksList: tasksReducer
})

export default reducer