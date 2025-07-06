// 新規TODO追加フォーム

import { useContext, useState } from 'react'
import { Button } from '@/components/ui/button'
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
        className="flex-grow min-w-0 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button type="submit">追加</Button>
    </form>
  )
}
