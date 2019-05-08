import { combineReducers } from 'redux'
import * as types from './types'

const allTasks = (state = [], action: any) => {
    switch (action.type) {
        case types.addTask:
            return [...state, action.task]
        case types.loadTasks:
            const tasks = localStorage.getItem('tasks')
            return tasks && tasks.length ? tasks : []
        default:
            return state
    }
}

const isAddEditTaskFormVisible = (state = false, action: any) => {
    switch (action.type) {
        case (types.toggleAddEditTaskForm):
            return action.isAddEditTaskFormVisible
        default:
            return state
    }
}

export default combineReducers({
    allTasks,
    isAddEditTaskFormVisible
})