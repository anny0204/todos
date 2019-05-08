import * as React from 'react'
import { actions } from '../@ducks'
import { connect } from 'react-redux'

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import './Task.sass'

interface ITaskProps {
    allTasks: any[],
    addTask: (task: any) => any,
    toggleAddEditTaskForm: (isAddEditTaskFormVisible: boolean) => any
}

const Task: React.SFC<ITaskProps> = (props) => {
    const [isTaskFormVisible, setIsTaskFormVisible] = React.useState(true)
    const now: Date = new Date()
    const [taskDate, setTaskDate] = React.useState(now)
    const [taskName, setTaskName] = React.useState('')
    const [isTaskComplete, setIsTaskComplete] = React.useState(false)

    const saveTask = () => {
        const task = {
            id: Date.now(),
            name: taskName,
            date: taskDate,
            description: 'Lorem ipsum',
            completed: isTaskComplete
        }
        props.addTask(task)
        setIsTaskFormVisible(false)
        setTimeout(() => props.toggleAddEditTaskForm(false), 300)
    }

    const cancelAddEdit = () => {
        setIsTaskFormVisible(false)
        setTimeout(() => props.toggleAddEditTaskForm(false), 300)
    }

    const changeTaskName = (e: any) => {
        setTaskName(e.target.value)
        setTaskDate(now)
    }

    const onTaskDateChange = (e: any) => {
        setTaskDate(e)
    }

    const onTaskDoneChange = (e: any) => {
        setIsTaskComplete(!isTaskComplete)
    }

    return (
        <div className={isTaskFormVisible ? 'task-form' : 'task-form animation-background-hide'}>
            <div className="mask" />
            <div className={isTaskFormVisible ? 'form-container' : 'form-container animation-hide' }>
                <div className="task-item-container">
                    <div className="f-left w-20 task-item-name">Name of task: </div>
                    <input className="w-80 task-item-name-input" type="text" value={taskName} onChange={(e) => changeTaskName(e)} />
                </div>
                <div className="task-item-container">
                    <div className="f-left w-20 task-item-name">Date: </div>
                    <DatePicker className="task-item-name-input" selected={taskDate} onChange={(e) => onTaskDateChange(e)} />
                </div>
                <div className="task-item-container">
                    <div className="f-left w-20 task-item-name">Complete: </div>
                    <input type="checkbox" className="task-item-name-checkbox" checked={isTaskComplete} onChange={(e) => onTaskDoneChange(e)} />
                </div>
                <div className="form-btns">
                    <button disabled={taskName === ''} className={taskName !== '' ? 'agree-btn' : 'agree-btn disabled'} onClick={() => saveTask()}>
                       Save
                    </button>
                    <button className="cancel-btn" onClick={() => cancelAddEdit()}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        allTasks: state.tasksList.allTasks
    }
  }
  
  const mapDispatchToProps = {
    ...actions
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Task)