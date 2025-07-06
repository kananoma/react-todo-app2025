// 新規TODO追加フォーム

import { useContext, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="新しいTODOを入力"
        className="flex-grow min-w-0"
      />
      <Button type="submit" disabled={text.trim() === ''}>
        追加
      </Button>
    </form>
  )
}
