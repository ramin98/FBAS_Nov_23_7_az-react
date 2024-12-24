export function getTodoList() {
    return async function (dispatch) {
        let res = await fetch('http://localhost:5000/todoList')
        let data = await res.json()
        dispatch({type:'GET TODO LIST', payload: data})
    }
} 

export function getCompletedList() {
    return async function (dispatch) {
        let res = await fetch('http://localhost:5000/completedList')
        let data = await res.json()
        dispatch({type:'GET COMPLETED LIST', payload: data})
    }
} 

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
        dispatch({type:'ADD TODO', payload: {...todo, id: data.id}})
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
        dispatch({type:'COMPLETED TODO', payload: todo})
    }
} 

export function deleteTodo(id) {
    return async function (dispatch) {
        let res = await fetch('http://localhost:5000/delete-todoList/' + id, {
            method:'DELETE'
        })
        let data = await res.json()
        console.log(data)
        dispatch({type:'COMPLETE', payload: id})
    }
} 