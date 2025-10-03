import { useState, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import type { AuthRepository, User } from '../models/LoginModel'
import { fakeAuthRepository } from '../models/LoginModel'

const authRepo: AuthRepository = fakeAuthRepository

export function useLoginViewModel() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false)
  const [email, setEmail] = useState('')

  const mutation = useMutation<User, Error, { username: string; password: string }>({
    mutationFn: ({ username, password }) => authRepo.login(username.trim(), password),
  })

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault()
    setIsForgotPasswordModalOpen(false)
    setEmail('')
  }

  // Estado derivado, não duplicamos no state para evitar loops
  const isValid = useMemo(
    () => username.trim().length > 0 && password.length > 0,
    [username, password]
  )

  const submit = useCallback(async (): Promise<User | null> => {
    if (!isValid) {
      setError('Preencha usuário e senha válidos')
      return null
    }

    setError(null)

    try {
      const user = await mutation.mutateAsync({ username, password })
      localStorage.setItem('authToken', user.token)
      navigate('/main')
      // ex.: salvar token via outro serviço, emitir evento, etc.
      return user
    } catch (e: any) {
      setError(e?.message ?? 'Erro desconhecido')
      return null
    }
  }, [authRepo, username, password, isValid, navigate])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      await submit()
    },
    [submit]
  )

  return {
    // propriedades observáveis pela View
    username,
    setUsername,
    password,
    setPassword,
    loading: mutation.isPending,
    error,
    isValid,
    isForgotPasswordModalOpen,
    setIsForgotPasswordModalOpen,
    email,
    setEmail,
    // ações/commands
    handleForgotPassword,
    handleSubmit,
  }
}
