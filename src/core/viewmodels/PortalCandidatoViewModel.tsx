import { useState, useCallback, useEffect } from 'react'
import { useQueryClient, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { authService } from '../services/authService'

export function usePortalCandidatoViewModel() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  // Usar useQuery do TanStack para gerenciar o estado do usuário
  const {
    data: user,
    isLoading: loading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const token = localStorage.getItem('authToken')

      if (!token) {
        throw new Error('No token found')
      }

      // Validar o token no backend
      const userData = await authService.validateToken(token)
      return userData
    },
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutos
    gcTime: 10 * 60 * 1000, // 10 minutos (anteriormente cacheTime)
    refetchOnWindowFocus: true, // Revalidar quando voltar à aba
    refetchInterval: 5 * 60 * 1000, // Revalidar a cada 5 minutos
  })

  // Redirecionar se houver erro de autenticação
  useEffect(() => {
    if (error) {
      console.error('Erro de autenticação:', error)
      localStorage.removeItem('authToken')
      navigate('/', { replace: true })
    }
  }, [error, navigate])

  // Logout seguro com limpeza completa
  const handleLogout = useCallback(async () => {
    try {
      const token = localStorage.getItem('authToken')

      // Invalidar token no backend
      if (token) {
        await authService.logout(token).catch(err => {
          console.error('Erro ao invalidar token no servidor:', err)
        })
      }

      // Limpar cache do React Query
      queryClient.removeQueries({ queryKey: ['user'] })
      queryClient.clear()

      // Remover token
      localStorage.removeItem('authToken')

      // Limpar outros dados sensíveis se houver
      sessionStorage.clear()

      navigate('/', { replace: true })
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
      // Mesmo com erro, remover dados locais
      localStorage.removeItem('authToken')
      queryClient.clear()
      navigate('/', { replace: true })
    }
  }, [navigate, queryClient])

  const handleNewRegistration = useCallback(() => {
    window.open('https://unisanta.br/cursos/', '_blank', 'noopener,noreferrer')
  }, [])

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen(prev => !prev)
  }, [])

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false)
  }, [])

  const openEditModal = useCallback(() => {
    setIsEditModalOpen(true)
  }, [])

  const closeEditModal = useCallback(() => {
    setIsEditModalOpen(false)
  }, [])

  return {
    user,
    loading,
    isDropdownOpen,
    isEditModalOpen,
    handleLogout,
    handleNewRegistration,
    toggleDropdown,
    closeDropdown,
    openEditModal,
    closeEditModal,
    refetchUser: refetch, // Permitir revalidação manual
  }
}
