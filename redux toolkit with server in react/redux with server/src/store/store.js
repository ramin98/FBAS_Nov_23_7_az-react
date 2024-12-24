import {configureStore} from '@reduxjs/toolkit'
import todoSlice from './reducers/todoReducer'
import completedSlice from './reducers/completedReducer'

let store = configureStore({
    reducer: {
        completedList: completedSlice,
        todoList: todoSlice,
    }
})

export default store
