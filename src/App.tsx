import { TodoProvider } from './contexts/TodoContext'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { EditTodoModal } from './components/EditTodoModal'

export const App = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-100 flex items-start justify-center p-2 sm:p-4">
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg w-full max-w-3xl container">
          <h1 className="text-2xl font-bold mb-6">TODO管理アプリ</h1>
          <TodoForm />
          <TodoList />
        </div>
      </div>
      <EditTodoModal />
    </TodoProvider>
  )
}
