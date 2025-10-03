import { useState, useCallback, useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import type { User } from '../models/LoginModel'

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
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
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

  useEffect(() => {
    const initializeData = async () => {
      try {
        const token = localStorage.getItem('authToken') || 'token-abc'

        if (!token) {
          navigate('/')
          return
        }

        const cachedUser = queryClient.getQueryData<User>(['user'])

        if (cachedUser) setUser(cachedUser)

        // Carregar dados do candidato
        await loadCandidateData()
      } catch (error) {
        navigate('/')
      } finally {
        setLoading(false)
      }
    }

    initializeData()
  }, [loadCandidateData, navigate, queryClient])

  const handleLogout = useCallback(async () => {
    try {
      localStorage.removeItem('authToken')
      navigate('/', { replace: true })
    } catch (error) {}
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
    // propriedades observáveis pela View
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
    handleTimelineAction,
    updateCandidateData,
    updateTempEditData,
    handleSaveChanges,
    handleProcessSelection,
  }
}
