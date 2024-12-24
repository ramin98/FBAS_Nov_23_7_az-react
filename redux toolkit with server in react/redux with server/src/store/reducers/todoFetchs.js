import { createAsyncThunk } from "@reduxjs/toolkit"
import { addTodo, complete } from "./todoReducer"
import { completedTodo } from "./completedReducer"

export let todoFetch = createAsyncThunk('content/todoFetch', async () => {
    let res = await fetch('http://localhost:5000/todoList')
    let data = await res.json()
    return data
})

export let completedFetch = createAsyncThunk('content/completedFetch', async () => {
    let res = await fetch('http://localhost:5000/completedList')
    let data = await res.json()
    return data
})


export function addTodoList(todo) {
    return async function (dispatch) {
        let res = await fetch('http://localhost:5000/add-todoList', {
            method:'POST',
            headers: {
                'Content-type' :'application/json'
            },
            body:JSON.stringify(todo)
        })
        let data = await res.json()
        console.log(data)
        dispatch(addTodo({...todo, id: data.id}))
    }
} 

export function addTodoCompleted(todo) {
    return async function (dispatch) {
        let res = await fetch('http://localhost:5000/add-completedList', {
            method:'POST',
            headers: {
                'Content-type' :'application/json'
            },
            body:JSON.stringify(todo)
        })
        let data = await res.json()
        console.log(data)
        dispatch(completedTodo(todo))
    }
} 

export function deleteTodo(id) {
    return async function (dispatch) {
        let res = await fetch('http://localhost:5000/delete-todoList/' + id, {
            method:'DELETE'
        })
        let data = await res.json()
        console.log(data)
        dispatch(complete(id))
    }
} 