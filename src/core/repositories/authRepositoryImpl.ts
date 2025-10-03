// src/core/repositories/authRepositoryImpl.ts
import { AuthRepository } from './authRepository'

const API_BASE_URL = process.env.VITE_API_URL // Vite

export class AuthRepositoryImpl implements AuthRepository {
  async login(email: string, password: string) {
    // const response = await fetch(`${API_BASE_URL}/auth/login`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   credentials: 'include',
    //   body: JSON.stringify({ email, password }),
    // })

    // if (!response.ok) {
    //   const error = await response.json().catch(() => ({}))
    //   throw new Error(error.message || 'Erro ao fazer login')
    // }

    // const data = await response.json()

    // return data
    if (email === 'user' && password === '1234') {
      return {
        user: { id: '1', name: 'Usuário de Teste', token: 'fake-token-valido' },
      }
    }
    throw new Error('Credenciais inválidas')
  }

  async validateToken(token: string) {
    const response = await fetch(`${API_BASE_URL}/auth/validate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      credentials: 'include',
    })

    if (!response.ok) {
      if (response.status === 401) throw new Error('Token inválido ou expirado')
      throw new Error('Erro ao validar token')
    }

    const data = await response.json()
    return data.user
  }

  async logout(token: string) {
    await fetch(`${API_BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      credentials: 'include',
    })
  }

  async refreshToken(refreshToken: string) {
    const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ refreshToken }),
    })

    if (!response.ok) throw new Error('Erro ao renovar token')

    const data = await response.json()
    return data
  }
}
