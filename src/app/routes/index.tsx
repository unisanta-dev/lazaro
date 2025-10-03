import { Routes, Route, Navigate } from 'react-router-dom'
import { AppProviders } from '../providers'
import LoginView from '../../core/views/LoginView'
import MainView from '../../core/views/MainView'

export default function App() {
  return (
    <AppProviders>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/main" element={<MainView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppProviders>
  )
}
