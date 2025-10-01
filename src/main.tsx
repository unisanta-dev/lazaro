import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './core/views/Login'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <Login />
      </div>
    </div>
  </React.StrictMode>
)
