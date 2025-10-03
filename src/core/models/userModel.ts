export type User = {
  id: string
  name: string
  token: string
}

export interface AuthRepository {
  login(email: string, password: string): Promise<User>
}

// Exemplo fake para demo / testes
export const fakeAuthRepository: AuthRepository = {
  async login(email, password) {
    await new Promise(res => setTimeout(res, 400))
    // Faz a validação fake do usuário e senha
    if (email === 'user' && password === 'password') {
      return { id: '1', name: 'Demo User', token: 'token-abc' }
    }
    throw new Error('Credenciais inválidas')
  },
}
