import './App.css'
import CompletedList from './components/CompletedList'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
     <TodoForm/>
     <TodoList/>
     <CompletedList/>
    </>
  )
}

export default App
