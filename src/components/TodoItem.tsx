// 個々のTODOアイテム

import { useContext } from 'react'
import { TodoContext, type Todo } from '../contexts/TodoContext'
import { Button } from '@/components/ui/button'

type Props = {
  todo: Todo
}

export const TodoItem = ({ todo }: Props) => {
  const { toggleTodo, deleteTodo, openEditModal } = useContext(TodoContext)

  return (
    <li className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-2 border-b">
      <span
        className={`flex-grow min-w-0 break-all cursor-pointer line-clamp-2 ${
          todo.completed ? 'line-through text-gray-400' : ''
        }`}
        onClick={() => openEditModal(todo)}
      >
        {todo.text}
      </span>
      <div className="flex flex-shrink-0 self-end sm:self-auto items-center gap-2 sm:ml-4">
        <Button onClick={() => toggleTodo(todo.id)} variant="outline" size="sm" className="w-20">
          {todo.completed ? '未完了' : '完了'}
        </Button>
        <Button onClick={() => deleteTodo(todo.id)} variant="destructive" size="sm" className="w-20">
          削除
        </Button>
      </div>
    </li>
  )
}
