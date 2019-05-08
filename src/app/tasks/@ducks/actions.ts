const addTask = (task: any) => ({
    type: 'ADD_TASK',
    task
})

const loadTasks = () => ({
    type: 'LOAD_TASK'
})

const toggleAddEditTaskForm = (isAddEditTaskFormVisible: boolean) => ({
    type: 'TOGGLE_ADD_EDIT_TASK_FORM',
    isAddEditTaskFormVisible
})

export {
    addTask,
    loadTasks,
    toggleAddEditTaskForm
}