import { useState, useCallback, useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import type { User } from '../models/userModel'

export function usePortalCandidatoViewModel() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  useEffect(() => {
    try {
      const token = localStorage.getItem('authToken')

      if (!token) {
        navigate('/')
        return
      }

      const cachedUser = queryClient.getQueryData<User>(['user'])

      if (cachedUser) setUser(cachedUser)
    } catch (error) {
      console.error('Erro ao carregar usuário:', error)
      navigate('/')
    } finally {
      setLoading(false)
    }
  }, [])

  const handleLogout = useCallback(async () => {
    try {
      localStorage.removeItem('authToken')
      navigate('/', { replace: true })
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }, [navigate])

  const handleNewRegistration = useCallback(() => {
    window.open('https://unisanta.br/cursos/', '_blank')
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
    // propriedades observáveis pela View
    user,
    loading,
    isDropdownOpen,
    isEditModalOpen,
    // ações/commands
    handleLogout,
    handleNewRegistration,
    toggleDropdown,
    closeDropdown,
    openEditModal,
    closeEditModal,
  }
}
