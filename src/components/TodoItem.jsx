import React, { useState } from 'react'
import styles from './Todo.module.css'

const TodoItem = ({ todo, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted)
  return (
    <div className={styles.todo} key={todo.id}>
      <input
        type='checkbox'
        checked={isCompleted}
        onChange={(e) => {
          // console.log(e.target.checked)
          setIsCompleted(e.target.checked)
        }}
      />
      <div className={isCompleted ? styles.striked : ''}>{todo.value}</div>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem
