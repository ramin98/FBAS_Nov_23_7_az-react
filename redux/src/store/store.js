import { applyMiddleware, combineReducers, createStore } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { completedReducer } from "./reducers/copletedReducer";
import {thunk} from 'redux-thunk'

let reducers = combineReducers({
    todoList: todoReducer,
    completedList: completedReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store