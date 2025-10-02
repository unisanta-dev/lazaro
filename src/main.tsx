import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './core/views/LoginView'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <div className="bg-background-secondary flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-huge text-text-primary mb-4 font-semibold">Hello World</h1>
        <p className="text-text-secondary text-base font-normal">
          Projeto MVVM React + Vite + TypeScript + TailwindCSS
        </p>
      </div>
    </div> */}
    <Login />
  </React.StrictMode>
)
