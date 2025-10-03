// vite.config.js
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '') // Load all environment variables

  return {
    plugins: [react()],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    define: {
      'process.env': JSON.stringify(env), // Make env variables accessible via process.env
    },
  }
})
