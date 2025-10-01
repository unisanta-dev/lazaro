import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Hello World</h1>
        <p className="text-lg text-gray-600">
          Projeto MVVM React + Vite + TypeScript + TailwindCSS
        </p>
      </div>
    </div>
  </React.StrictMode>
)
