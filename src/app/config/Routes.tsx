import * as React from 'react';
import TasksList from '../tasks/tasks-list/TasksList';
import {HashRouter, Route } from 'react-router-dom';

const Routes: React.SFC<any> = () => {
    return (
        <HashRouter>
            <Route path='/' component={TasksList} />
        </HashRouter>
    )
}

export default Routes
