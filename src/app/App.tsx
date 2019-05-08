import * as React from 'react'
import { actions } from './tasks/@ducks'
import { connect } from 'react-redux'
import Routes from './config/Routes'
import './App.sass'

interface IAppProps {
    loadTasks: () => any
}

const App: React.SFC<IAppProps> = (props) => {
  
    React.useEffect(
        () => {
            localStorage.getItem('tasks')
            return () => {
                localStorage.getItem('tasks')
            }
        },
        []
    )

    return (
        <Routes />
    )
}

const mapStateToProps = (state: any) => {
  return {
  }
}

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
