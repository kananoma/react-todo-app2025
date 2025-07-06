// 編集モーダル

import { useContext, useState, useEffect } from 'react'
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
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus // モーダルが開いたら自動でフォーカスする
          />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={closeEditModal} className="btn bg-gray-300 px-4 py-2 hover:bg-gray-400">
              キャンセル
            </button>
            <button type="submit" className="btn bg-blue-500 px-4 py-2 hover:bg-blue-600 focus:ring-blue-500">
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
