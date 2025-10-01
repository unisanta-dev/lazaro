import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="flex min-h-screen items-center justify-center bg-background-secondary">
      <div className="text-center">
        <h1 className="mb-4 text-huge font-semibold text-text-primary">Hello World</h1>
        <p className="text-base font-normal text-text-secondary">
          Projeto MVVM React + Vite + TypeScript + TailwindCSS
        </p>
      </div>
    </div>
  </React.StrictMode>
)
