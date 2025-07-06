import { TodoProvider } from './contexts/TodoContext'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

export const App = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-100 flex items-start justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl m-8">
          <h1 className="text-2xl font-bold mb-6">TODO管理アプリ</h1>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  )
}
