const addTask = (task: any) => ({
    type: 'ADD_TASK',
    task
})

const editTask = (task: any) => ({
    type: 'EDIT_TASK',
    task
})

const loadTasks = () => ({
    type: 'LOAD_TASKS'
})

const toggleAddEditTaskForm = (isAddEditTaskFormVisible: boolean) => ({
    type: 'TOGGLE_ADD_EDIT_TASK_FORM',
    isAddEditTaskFormVisible
})

const removeTask = (taskId: number) => ({
    type: 'REMOVE_TASK',
    taskId
})

const setSelectedTask = (task: any) => ({
    type: 'SET_SELECTED_TASK',
    task
})

export {
    addTask,
    loadTasks,
    toggleAddEditTaskForm,
    removeTask,
    editTask,
    setSelectedTask
}