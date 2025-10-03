import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClientCandidato = new QueryClient()
const queryClientAdmin = new QueryClient()

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <BrowserRouter>{children}</BrowserRouter>
}

export function CandidatoProviders({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClientCandidato}>{children}</QueryClientProvider>
}

export function AdminProviders({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClientAdmin}>{children}</QueryClientProvider>
}
