import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FiChevronDown, FiLogOut, FiUserPlus } from 'react-icons/fi'
import { useMainViewModel } from '../viewmodels/MainViewModel'

interface MainProps {
  // props opcionais
}

const Main: React.FC<MainProps> = () => {
  const viewModel = useMainViewModel()

  return (
    <div className="flex h-screen w-full flex-col bg-background-primary">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex h-20 w-full items-center justify-between bg-gradient-to-r from-primary to-secondary px-6 shadow-soft"
      >
        {/* Logo no canto inferior esquerdo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-end"
        >
          <img
            src="/UNISANTA_logo.png"
            alt="UNISANTA Logo"
            className="h-12 w-auto object-contain brightness-0 invert"
          />
        </motion.div>

        {/* Botões no canto superior direito */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center gap-4"
        >
          {/* Botão Nova Inscrição */}
          <motion.button
            onClick={viewModel.handleNewRegistration}
            className="flex items-center gap-2 rounded-xl bg-background-primary px-4 py-2 text-sm font-semibold text-primary shadow-soft transition-all duration-200 hover:bg-background-light hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-primary/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiUserPlus size={16} />
            Nova inscrição
          </motion.button>

          {/* Dropdown do usuário */}
          <div className="relative">
            <motion.button
              onClick={viewModel.toggleDropdown}
              className="flex items-center gap-2 rounded-xl bg-background-primary px-4 py-2 text-sm font-semibold text-primary shadow-soft transition-all duration-200 hover:bg-background-light focus:outline-none focus:ring-2 focus:ring-primary/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="hidden sm:block">
                {viewModel.loading ? 'Carregando...' : viewModel.user?.name || 'Usuário'}
              </span>
              <FiChevronDown
                size={16}
                className={`transition-transform duration-200 ${viewModel.isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </motion.button>

            {/* Menu dropdown */}
            <AnimatePresence>
              {viewModel.isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 min-w-full rounded-xl bg-background-primary py-2 shadow-strong"
                >
                  <motion.button
                    onClick={viewModel.handleLogout}
                    className="flex w-full items-center gap-3 px-4 py-2 text-sm font-semibold text-text transition-all duration-200 hover:bg-background-light hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    whileHover={{ x: 4 }}
                  >
                    <FiLogOut size={16} />
                    Sair
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.header>

      {/* Conteúdo principal */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex-1 p-6"
      >
        {/* Placeholder para conteúdo futuro */}
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <h2 className="mb-4 text-xx-large font-bold text-text">Conteúdo</h2>
          </div>
        </div>
      </motion.main>

      {/* Overlay para fechar dropdown ao clicar fora */}
      <AnimatePresence>
        {viewModel.isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10"
            onClick={viewModel.closeDropdown}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Main
