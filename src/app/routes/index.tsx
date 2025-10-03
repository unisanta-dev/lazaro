import { Routes, Route } from 'react-router-dom'
import { AppProviders } from '../providers'
import Login from '../../core/views/LoginView'

export default function App() {
  return (
    <AppProviders>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AppProviders>
  )
}
