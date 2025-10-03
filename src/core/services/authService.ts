// src/core/services/authService.ts
import { AuthRepository } from '../repositories/authRepository'
import type { User } from '../models/userModel'

export class AuthService {
  constructor(private repository: AuthRepository) {}

  async login(email: string, password: string): Promise<{ user: User }> {
    const data = await this.repository.login(email, password)
    if (data.user.token) localStorage.setItem('authToken', data.user.token)
    return data
  }

  async validateToken(token: string): Promise<User> {
    return this.repository.validateToken(token)
  }

  async logout(token: string) {
    await this.repository.logout(token)
    localStorage.removeItem('authToken')
  }

  async refreshToken(refreshToken: string) {
    const data = await this.repository.refreshToken(refreshToken)
    if (data.token) localStorage.setItem('authToken', data.token)
    return data
  }

  hasToken() {
    return !!localStorage.getItem('authToken')
  }

  getToken(): string | null {
    return localStorage.getItem('authToken')
  }
}

// Instância
import { AuthRepositoryImpl } from '../repositories/authRepositoryImpl'
export const authService = new AuthService(new AuthRepositoryImpl())
