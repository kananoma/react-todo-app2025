// Context APIの設定

import { createContext, useState, type ReactNode } from 'react'

// 1.TODOアイテムの型を定義
export type Todo = {
  id: number
  text: string
  completed: boolean
}

// 2.Contextで提供する値の型を定義
type TodoContextType = {
  todos: Todo[]
  editingTodo: Todo | null
  addTodo: (text: string) => void
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
  updateTodo: (id: number, text: string) => void
  openEditModal: (todo: Todo) => void
  closeEditModal: () => void
}

// 3.Contextを作成(初期値はTypeScriptのためにasでキャスト)
export const TodoContext = createContext<TodoContextType>({} as TodoContextType)

// 4.Providerコンポーネントを作成
export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null)

  // 新規TODOを追加する
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  // TODOの完了/未完了を切り替える
  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  // TODOを削除する
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
    console.log(`deleted todo with id: ${id}`)
  }

  // TODOを更新する
  const updateTodo = (id: number, text: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)))
  }

  // 編集モーダルを開く
  const openEditModal = (todo: Todo) => {
    setEditingTodo(todo)
  }

  // 編集モーダルを閉じる
  const closeEditModal = () => {
    setEditingTodo(null)
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        editingTodo,
        addTodo,
        toggleTodo,
        deleteTodo,
        updateTodo,
        openEditModal,
        closeEditModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
