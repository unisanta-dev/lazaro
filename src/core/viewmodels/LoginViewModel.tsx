// viewmodel/useLoginViewModel.ts
import { useState, useMemo, useCallback } from 'react'
import type { AuthRepository, User } from '../models/LoginModel'
import { fakeAuthRepository } from '../models/LoginModel'

const authRepo: AuthRepository = fakeAuthRepository

export function useLoginViewModel() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false)
  const [email, setEmail] = useState('')

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault()
    setIsForgotPasswordModalOpen(false)
    setEmail('')
  }

  // Estado derivado, não duplicamos no state para evitar loops
  const isValid = useMemo(
    () => username.trim().length > 0 && password.length >= 6,
    [username, password]
  )

  const submit = useCallback(async (): Promise<User | null> => {
    if (!isValid) {
      setError('Preencha usuário e senha válidos (senha ≥ 6 caracteres)')
      return null
    }
    setLoading(true)
    setError(null)
    try {
      const user = await authRepo.login(username.trim(), password)
      // ex.: salvar token via outro serviço, emitir evento, etc.
      return user
    } catch (e: any) {
      setError(e?.message ?? 'Erro desconhecido')
      return null
    } finally {
      setLoading(false)
    }
  }, [authRepo, username, password, isValid])

  return {
    // propriedades observáveis pela View
    username,
    setUsername,
    password,
    setPassword,
    loading,
    error,
    isValid,
    isForgotPasswordModalOpen,
    setIsForgotPasswordModalOpen,
    email,
    setEmail,
    handleForgotPassword,
    // ações/commands
    submit,
  }
}
