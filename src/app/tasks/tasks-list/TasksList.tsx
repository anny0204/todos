import * as React from 'react'
import { actions } from '../@ducks'
import { connect } from 'react-redux'
import * as dateFormat from 'date-fns/format'

import * as Completed from '../../images/completed.png'
import * as NotCompleted from '../../images/not-completed.png'
import * as Delete from '../../images/delete.svg'

import './TasksList.sass';
import Header from '../../header/Header'
import Task from '../task/Task'

// const tasks = [
//     {
//         id: 0,
//         name: 'Do morning exescises',
//         date: '2019-05-03',
//         description: 'Lorem ipsum',
//         completed: false
//     },
//     {
//         id: 1,
//         name: 'Cooking',
//         date: '2019-05-08',
//         description: 'Lorem ipsum',
//         completed: false
//     },
//     {
//         id: 1,
//         name: 'Shoping',
//         date: '2019-05-08',
//         description: 'Lorem ipsum',
//         completed: true
//     }
// ]

interface ITasksListProps {
    allTasks: any[],
    addTask: (task: any) => any,
    loadTasks: () => any,
    removeTask: (taskId: number) => any
    toggleAddEditTaskForm: (isAddEditTaskFormVisible: boolean) => any,
    isAddEditTaskFormVisible: boolean,
    setSelectedTask: (task: any) => any
}

const TasksList: React.SFC<ITasksListProps> = (props) => {
    const { allTasks, isAddEditTaskFormVisible } = props
    
    React.useEffect(
        () => {
            props.loadTasks()
        },
        []
    )

    const addTask = (task: any) => {
        props.setSelectedTask(task)
        props.toggleAddEditTaskForm(true)
    }

    const editTask = (task: any) => {
        props.setSelectedTask(task)
        props.toggleAddEditTaskForm(true)
    }

    const deleteTask = (e: any, taskId: number) => {
        e.stopPropagation()
        props.removeTask(taskId)
    }

    return (
        <div className="container">
            <Header />
            <main className="task-list-container">
                  <div className="add-button-container">
                      <button onClick={() => addTask('')}>Add task</button>
                  </div>
                  {allTasks && allTasks.length !== 0 && allTasks.map((task: any) => {
                      return <div className="list-item-container" key={task.id} onClick={() => editTask(task)}>
                          <div className="f-left w-50">{task.name}</div>
                          <div className="f-left w-30">{dateFormat(task.date, 'Do MMMM YYYY')}</div>
                          <div className="f-left w-10">
                              <div className="icon-img" style={{backgroundImage: `url(${task.completed ? Completed : NotCompleted})`}}/>
                          </div>
                          <div className="f-left w-10 delete-container">
                              <div onClick={(e) => deleteTask(e, task.id)} className="icon-img" style={{backgroundImage: `url(${Delete})`}}/>
                          </div>
                      </div>
                  })}
            </main>
            {isAddEditTaskFormVisible && <Task />}
        </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
      allTasks: state.tasksList.allTasks,
      isAddEditTaskFormVisible: state.tasksList.isAddEditTaskFormVisible
  }
}

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)