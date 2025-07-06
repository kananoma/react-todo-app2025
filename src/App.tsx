import { TodoProvider } from './contexts/TodoContext'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { EditTodoModal } from './components/EditTodoModal'

export const App = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-100 flex items-start justify-center p-2 sm:p-4">
        {/* 白いメインコンテナ */}
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg w-full max-w-3xl container flex flex-col max-h-[calc(100vh-1rem)] sm:max-h-[calc(100vh-2rem)]">
          {/* ヘッダーとフォーム（高さ固定エリア） */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold mb-6">TODO管理アプリ</h1>
            <TodoForm />
          </div>
          {/* TODOリスト（スクロール可能エリア） */}
          <div className="overflow-y-auto">
            <TodoList />
          </div>
        </div>
      </div>
      <EditTodoModal />
    </TodoProvider>
  )
}
