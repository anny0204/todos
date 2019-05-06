import * as React from 'react';
import * as dateFormat from 'date-fns/format'

import * as Completed from '../../images/completed.png'
import * as NotCompleted from '../../images/not-completed.png'
import * as Delete from '../../images/delete.svg'

import './TasksList.sass';
import Header from '../../header/Header';

const tasks = [
    {
        id: 0,
        name: 'Do morning exescises',
        date: '2019-05-03',
        description: 'Lorem ipsum',
        completed: false
    },
    {
        id: 1,
        name: 'Cooking',
        date: '2019-05-08',
        description: 'Lorem ipsum',
        completed: false
    },
    {
        id: 1,
        name: 'Shoping',
        date: '2019-05-08',
        description: 'Lorem ipsum',
        completed: true
    }
]

const TasksList: React.SFC<any> = () => {
    return (
        <div className="container">
            <Header />
            <main className="task-list-container">
                  <div className="add-button-container">
                      <button>Add task</button>
                  </div>
                  {tasks.map((task: any) => {
                      return <div className="list-item-container" key={task.id}>
                          <div className="f-left w-50">{task.name}</div>
                          <div className="f-left w-30">{dateFormat(task.date, 'Do MMMM YYYY')}</div>
                          <div className="f-left w-10">
                              <div className="icon-img" style={{backgroundImage: `url(${task.completed ? Completed : NotCompleted})`}}/>
                          </div>
                          <div className="f-left w-10 delete-container">
                              <div className="icon-img" style={{backgroundImage: `url(${Delete})`}}/>
                          </div>
                      </div>
                  })}
            </main>
        </div>
  )
}

export default TasksList;