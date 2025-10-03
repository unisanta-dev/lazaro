import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from '../../core/views/LoginView'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
