// 個々のTODOアイテム

import { useContext } from 'react'
import { TodoContext, type Todo } from '../contexts/TodoContext'

type Props = {
  todo: Todo
}

export const TodoItem = ({ todo }: Props) => {
  const { toggleTodo, deleteTodo, openEditModal } = useContext(TodoContext)

  return (
    <li className="flex items-center justify-between py-2 border-b">
      <span
        className={`flex-grow min-w-0 break-all cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
        onClick={() => openEditModal(todo)}
      >
        {todo.text}
      </span>
      <div className="flex flex-shrink-0 items-center gap-2 ml-4">
        <button
          onClick={() => toggleTodo(todo.id)}
          className={`btn w-20 px-3 py-2 text-sm ${
            todo.completed
              ? 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500'
              : 'bg-green-500 hover:bg-green-600 focus:ring-green-500'
          }`}
        >
          {todo.completed ? '未完了' : '完了'}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="btn w-20 bg-red-500 px-3 py-2 text-sm hover:bg-red-600 focus:ring-red-500"
        >
          削除
        </button>
      </div>
    </li>
  )
}
