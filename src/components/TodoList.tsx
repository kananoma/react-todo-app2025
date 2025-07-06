// TODOリスト全体

import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const { todos } = useContext(TodoContext)

  return (
    <ul className="list-none p-0">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
