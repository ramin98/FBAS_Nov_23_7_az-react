import { useDispatch } from "react-redux"

function TodoForm() {

    let dispatch = useDispatch()

    function handleAddTodo(ev) {
        ev.preventDefault()
        let formData = new FormData(ev.target)
        dispatch({type:'ADD TODO', payload: formData.get('todo-input')})
    }

    return (
      <form onSubmit={handleAddTodo}>
       <input type="text" name="todo-input"/>
       <button>ADD</button>
      </form>
    )
  }
  
  export default TodoForm
  