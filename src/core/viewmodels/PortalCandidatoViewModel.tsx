import { useState, useCallback, useEffect } from 'react'
import { useQueryClient, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { authService } from '../services/authService'

interface CandidateData {
  course: string
  state: string
  studyLocation: string
  modality: string
  campus: string
  entryMethod: string
}

interface TimelineItem {
  id: string
  title: string
  status: 'completed' | 'pending'
  description: string
  hasAction: boolean
}

export function usePortalCandidatoViewModel() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [selectedProcess, setSelectedProcess] = useState<string>('')
  const [candidateData, setCandidateData] = useState<CandidateData>({
    course: '',
    state: '',
    studyLocation: '',
    modality: '',
    campus: '',
    entryMethod: '',
  })
  const [tempEditData, setTempEditData] = useState<Partial<CandidateData>>({})

  const loadCandidateData = useCallback(async () => {
    try {
      const mockData: CandidateData = {
        course: 'Ciência da Computação',
        state: 'São Paulo',
        studyLocation: 'Santos - Centro',
        modality: 'Presencial',
        campus: 'Santos - Centro',
        entryMethod: 'Vestibular',
      }

      const savedData = localStorage.getItem('candidateData')
      if (savedData) {
        setCandidateData(JSON.parse(savedData))
      } else {
        setCandidateData(mockData)
      }
    } catch (error) {}
  }, [])

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

  // Carregar dados do candidato quando o componente monta
  useEffect(() => {
    loadCandidateData()
  }, [loadCandidateData])

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
    // Inicializar dados temporários com os dados atuais
    setTempEditData({
      course: candidateData.course,
      state: candidateData.state,
      studyLocation: candidateData.studyLocation,
      campus: candidateData.campus,
    })
    setIsEditModalOpen(true)
  }, [candidateData])

  const closeEditModal = useCallback(() => {
    setTempEditData({})
    setIsEditModalOpen(false)
  }, [])

  const getTimelineItems = useCallback((): TimelineItem[] => {
    return [
      {
        id: 'inscricao',
        title: 'Inscrição',
        status: 'completed',
        description: 'Concluída',
        hasAction: false,
      },
      {
        id: 'prova-online',
        title: 'Prova Online',
        status: 'pending',
        description: 'Pendente',
        hasAction: true,
      },
      {
        id: 'enem',
        title: 'ENEM',
        status: 'pending',
        description: 'Pendente',
        hasAction: true,
      },
      {
        id: 'documentos-inscricao',
        title: 'Documentos de Inscrição',
        status: 'pending',
        description: 'Pendente',
        hasAction: true,
      },
      {
        id: 'pre-matricula',
        title: 'Pré-Matrícula',
        status: 'pending',
        description: 'Pendente',
        hasAction: true,
      },
    ]
  }, [])

  const handleTimelineAction = useCallback((itemId: string) => {
    switch (itemId) {
      case 'inscricao':
        break
      case 'prova-online':
        break
      case 'enem':
        break
      case 'documentos-inscricao':
        break
      case 'pre-matricula':
        break
      default:
        break
    }
  }, [])

  const updateCandidateData = useCallback((newData: Partial<CandidateData>) => {
    setCandidateData(prev => ({ ...prev, ...newData }))
  }, [])

  const updateTempEditData = useCallback((newData: Partial<CandidateData>) => {
    setTempEditData(prev => ({ ...prev, ...newData }))
  }, [])

  const handleSaveChanges = useCallback(() => {
    try {
      const updatedData = { ...candidateData, ...tempEditData }

      if (tempEditData.studyLocation) {
        updatedData.campus = tempEditData.studyLocation
      }

      setCandidateData(updatedData)

      localStorage.setItem('candidateData', JSON.stringify(updatedData))

      closeEditModal()
    } catch (error) {}
  }, [candidateData, tempEditData, closeEditModal])

  const handleProcessSelection = useCallback((process: string) => {
    setSelectedProcess(process)
  }, [])

  return {
    user,
    loading,
    isDropdownOpen,
    isEditModalOpen,
    selectedProcess,
    candidateData,
    tempEditData,
    timelineItems: getTimelineItems(),
    // ações/commands
    handleLogout,
    handleNewRegistration,
    toggleDropdown,
    closeDropdown,
    openEditModal,
    closeEditModal,
    refetchUser: refetch, // Permitir revalidação manual
    handleTimelineAction,
    updateCandidateData,
    updateTempEditData,
    handleSaveChanges,
    handleProcessSelection,
  }
}
