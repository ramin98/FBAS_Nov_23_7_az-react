import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoCompleted, deleteTodo, todoFetch } from "../store/reducers/todoFetchs";

function TodoList() {
    
  let todoList = useSelector((state) => state.todoList.todoArray);
  let loading = useSelector((state) => state.todoList.loading);
  let error = useSelector((state) => state.todoList.error);

  let dispatch = useDispatch();


  useEffect(() => {
    dispatch(todoFetch())
  },[])

  if(loading){
   return <h1>LOADING...</h1>
  }

  if(error){
    return <h1>ERROR!!!</h1>
   }
  return (
    <div>
      <h1>TODO LIST</h1>
      <ul>
        {todoList.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.id}: {item.todo} - {item.completed ? "COMPLETED" : "UNCOMPLETED"}</p>
              <button onClick={() => {
                dispatch(deleteTodo(item.id))
                dispatch(addTodoCompleted({...item, completed: true}))
                }}>
                COMPLETE
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
