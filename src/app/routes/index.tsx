import { Routes, Route } from 'react-router-dom'
import { AppProviders, CandidatoProviders } from '../providers'
import Login from '../../core/views/LoginView'

export default function App() {
  return (
    <AppProviders>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route element={<CandidatoProviders />}>
          <Route path="/home" element={<div>BATATA</div>} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </AppProviders>
  )
}
