import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// GitHubリポジトリ名を設定 (例: your-repository-name)
const REPO_NAME = 'react-todo-app2025'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pagesデプロイ用のベースパス設定
  base: `/${REPO_NAME}/`,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
