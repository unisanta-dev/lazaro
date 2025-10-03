import { Routes, Route, Navigate } from 'react-router-dom'
import { AppProviders, CandidatoProviders } from '../providers'
import LoginView from '../../core/views/LoginView'
import MainView from '../../core/views/MainView'

export default function App() {
  return (
    <AppProviders>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<div>Home</div>} />
        <Route element={<CandidatoProviders />}>
          <Route path="/main" element={<MainView />} />
        </Route>
      </Routes>
    </AppProviders>
  )
}
