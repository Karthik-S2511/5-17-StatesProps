import React, { useState } from 'react'
import styles from './Todo.module.css'
import TodoItem from '../components/TodoItem'

const Todo = () => {
  const [todos, setTodos] = useState([])
  let [value, setValue] = useState('')

  const onDelete = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }
  
  return (
    <div>
      Todo
      <input onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          setTodos([...todos, { id: Date.now(), value: value }])
          setValue('')
        }}
      >
        Add
      </button>
      <div className={styles.todoList}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </div>
    </div>
  )
}

export default Todo

// onChange="function(e) {set}"
