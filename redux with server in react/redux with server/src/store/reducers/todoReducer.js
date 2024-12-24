export let initialObjectTodoList = {
  todoArray: [],
};

export function todoReducer(state = initialObjectTodoList, action) {
  if (action.type === "ADD TODO") {
    let todoList = [...state.todoArray];
    todoList.push(action.payload);

    return {...state, todoArray: todoList}
  }else if(action.type === 'COMPLETE'){
    let todoList = [...state.todoArray];
    let index = todoList.findIndex((item) => item.id === action.payload)
    todoList.splice(index, 1)
    return {...state, todoArray: todoList}
  }else if(action.type === 'GET TODO LIST'){
    return {...state, todoArray: action.payload}
  }


  return state;
}
