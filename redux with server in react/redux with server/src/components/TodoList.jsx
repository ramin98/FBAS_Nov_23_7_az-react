import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoCompleted, deleteTodo, getTodoList } from "../store/reducers/todoFetchs";

function TodoList() {
    
  let todoList = useSelector((state) => state.todoList.todoArray);
  let dispatch = useDispatch();


  useEffect(() => {
    dispatch(getTodoList())
  },[])

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
