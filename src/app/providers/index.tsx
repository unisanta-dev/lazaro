import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <BrowserRouter>{children}</BrowserRouter>
}

export function CandidatoProviders({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
