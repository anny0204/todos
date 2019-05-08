import * as React from 'react'
import { actions } from './tasks/@ducks'
import { connect } from 'react-redux'
import Routes from './config/Routes'
import './App.sass'

interface IAppProps {
    loadTasks: () => any,
    allTasks: any[]
}

const App: React.SFC<IAppProps> = (props) => {
    return (
        <Routes />
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
