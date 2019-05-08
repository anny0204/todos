import { createStore } from 'redux'
import reducer from './rootReducer'

const initialState: any = {
    tasksList: {
        allTasks: []
    }
}

const configureStore = () => {
    return createStore(
        reducer,
        initialState
    )
}

export default configureStore