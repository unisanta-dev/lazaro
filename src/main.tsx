import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './app/routes'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
)
