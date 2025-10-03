import { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { User } from '../models/LoginModel'

export function useMainViewModel() {
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Carrega dados do usuário atual baseado no token de autenticação
  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem('authToken') || 'token-abc'

        await new Promise(res => setTimeout(res, 100))
        if (!token) {
          navigate('/')
          return
        }

        const currentUser: User = {
          id: '1',
          name: 'Usuário Demo',
          token: token,
        }

        setUser(currentUser)
      } catch (error) {
        console.error('Erro ao carregar usuário:', error)
        navigate('/')
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [navigate])

  const handleLogout = useCallback(async () => {
    try {
      localStorage.removeItem('authToken')
      navigate('/')
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }, [navigate])

  const handleNewRegistration = useCallback(() => {
    console.log('Nova inscrição clicada')
  }, [])

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen(prev => !prev)
  }, [])

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false)
  }, [])

  return {
    // propriedades observáveis pela View
    user,
    loading,
    isDropdownOpen,

    // ações/commands
    handleLogout,
    handleNewRegistration,
    toggleDropdown,
    closeDropdown,
  }
}
