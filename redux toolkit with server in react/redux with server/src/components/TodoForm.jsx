import { useDispatch } from "react-redux"
import { addTodoList } from "../store/reducers/todoFetchs"

function TodoForm() {

    let dispatch = useDispatch()

    function handleAddTodo(ev) {
        ev.preventDefault()
        let formData = new FormData(ev.target)
        let todoItem = {
          todo: formData.get('todo-input'),
          completed: false
        };
        dispatch(addTodoList(todoItem))
    }

    return (
      <form onSubmit={handleAddTodo}>
       <input type="text" name="todo-input"/>
       <button>ADD</button>
      </form>
    )
  }
  
  export default TodoForm
  