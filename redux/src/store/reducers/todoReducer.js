export let initialObjectTodoList = {
  todoArray: [],
};

export function todoReducer(state = initialObjectTodoList, action) {
  if (action.type === "ADD TODO") {
    let todoList = [...state.todoArray];

    let todoItem = {
      todo: action.payload,
      id: todoList.length === 0 ? 1 : todoList.at(-1).id + 1,
      completed: false
    };

    todoList.push(todoItem);

    return {...state, todoArray: todoList}
  }else if(action.type === 'COMPLETE'){
    let todoList = [...state.todoArray];
    let index = todoList.findIndex((item) => item.id === action.payload.id)
    todoList.splice(index, 1)
    return {...state, todoArray: todoList}
  }

  return state;
}
