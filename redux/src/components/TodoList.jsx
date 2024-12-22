import { useDispatch, useSelector } from "react-redux";

function TodoList() {
    
  let todoList = useSelector((state) => state.todoList.todoArray);
  let dispatch = useDispatch();

  console.log(todoList);

  return (
    <div>
      <h1>TODO LIST</h1>
      <ul>
        {todoList.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.id}: {item.todo} - {item.completed ? "COMPLETED" : "UNCOMPLETED"}</p>
              <button onClick={() => dispatch({ type: "COMPLETE", payload:item })}>
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
