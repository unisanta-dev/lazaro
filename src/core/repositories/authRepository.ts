import type { User } from '../models/userModel'

export interface AuthRepository {
  login(email: string, password: string): Promise<{ user: User }>
  validateToken(token: string): Promise<User>
  logout(token: string): Promise<void>
  refreshToken(refreshToken: string): Promise<{ token: string }>
}
