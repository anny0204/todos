import { combineReducers } from 'redux'
import * as types from './types'

const allTasks = (state: any = [], action: any) => {
    switch (action.type) {
        case types.addTask: {
            const newState = [...state, action.task]
            localStorage.setItem('tasks', JSON.stringify(newState))
            return newState
        }
        case types.removeTask: {
            const newState = [...state].filter((s: any) => s.id !== action.taskId)
            localStorage.setItem('tasks', JSON.stringify(newState))
            return newState
        }
        case types.editTask: {
            const taskIndex = state.indexOf(state.find((t: any) => t.id === action.task.id))
            state.splice(taskIndex, 1, action.task)
            localStorage.setItem('tasks', JSON.stringify(state))
            return state
        }
        case types.loadTasks:
            let tasks: any = localStorage.getItem('tasks')
            tasks = JSON.parse(tasks)
            return tasks ? tasks : []
        default:
            return state
    }
}

const selectedTask = (state: any = '', action: any) => {
    switch (action.type) {
        case types.setSelectedTask:
            return action.task
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
    isAddEditTaskFormVisible,
    selectedTask
})