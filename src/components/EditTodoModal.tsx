// 編集モーダル

import { useContext, useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { TodoContext } from '../contexts/TodoContext'

export const EditTodoModal = () => {
  const { editingTodo, closeEditModal, updateTodo } = useContext(TodoContext)
  const [text, setText] = useState('')

  // モーダルが開かれたとき（editingTodoが変更されたとき）に
  // inputのテキストを初期化する
  useEffect(() => {
    if (editingTodo) {
      setText(editingTodo.text)
    }
  }, [editingTodo])

  if (!editingTodo) {
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim() === '') return
    updateTodo(editingTodo.id, text)
    closeEditModal()
  }

  return (
    // オーバーレイ
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={closeEditModal}
    >
      {/* モーダル本体 */}
      <div
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md m-4"
        onClick={(e) => e.stopPropagation()} // モーダル内のクリックがオーバーレイに伝播しないようにする
      >
        <h2 className="text-xl font-bold mb-4">TODOを編集</h2>
        <form onSubmit={handleSubmit}>
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mb-4 min-h-[80px]"
            autoFocus // モーダルが開いたら自動でフォーカスする
          />
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={closeEditModal}>
              キャンセル
            </Button>
            <Button type="submit" disabled={text.trim() === ''}>
              保存
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
