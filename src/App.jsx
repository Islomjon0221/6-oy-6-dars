import './App.css'
import Input from "./components/Input/Input"
import Admin from "./components/Admin/Admin"
import Todo from "./components/Todo/Todo"

function App() {  
  return (
    <>
    <Admin />
      <div className="container">
        <div className="wrapper">
          <h1 className="h1">Todos(5)</h1>
        <Input />
        <Todo />
        </div>
      </div>
    </>
  )
}

export default App

