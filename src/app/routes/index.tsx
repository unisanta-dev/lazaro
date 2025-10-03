import { Routes, Route, Navigate } from 'react-router-dom'
import { AppProviders, CandidatoProviders } from '../providers'
import LoginView from '../../core/views/LoginView'
import PortalCandidatoView from '../../core/views/PortalCandidatoView'

export default function App() {
  return (
    <AppProviders>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route element={<CandidatoProviders />}>
          <Route path="/" element={<LoginView />} />
          <Route path="/main" element={<PortalCandidatoView />} />
        </Route>
      </Routes>
    </AppProviders>
  )
}
