// 新規TODO追加フォーム

import { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'

export const TodoForm = () => {
  const [text, setText] = useState('')
  const { addTodo } = useContext(TodoContext)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim() === '') {
      return
    }
    addTodo(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-between mb-4 gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="新しいTODOを入力"
        className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="btn bg-blue-500 px-4 py-2 hover:bg-blue-600 focus:ring-blue-500">
        追加
      </button>
    </form>
  )
}
