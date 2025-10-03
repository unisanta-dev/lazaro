import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FiChevronDown, FiLogOut, FiUserPlus } from 'react-icons/fi'
import { usePortalCandidatoViewModel } from '../viewmodels/PortalCandidatoViewModel'

const Header: React.FC = () => {
  const viewModel = usePortalCandidatoViewModel()

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative flex h-24 w-full items-center justify-between bg-gradient-to-r from-primary to-secondary px-6 shadow-soft"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex items-end"
      >
        <img
          src="/UNISANTA_logo.png"
          alt="UNISANTA Logo"
          className="h-16 w-auto object-contain brightness-0 invert"
        />
      </motion.div>

      {/* Botões */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex items-center gap-4"
      >
        {/* Botão Nova Inscrição */}
        <motion.button
          onClick={viewModel.handleNewRegistration}
          className="flex items-center gap-2 rounded-xl bg-background-primary px-6 py-3 text-base font-semibold text-primary shadow-soft transition-all duration-200 hover:bg-background-light hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-primary/20"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FiUserPlus size={20} />
          Nova inscrição
        </motion.button>

        {/* Dropdown do usuário */}
        <div className="relative">
          <motion.button
            onClick={viewModel.toggleDropdown}
            className="flex items-center gap-2 rounded-xl bg-background-primary px-6 py-3 text-base font-semibold text-primary shadow-soft transition-all duration-200 hover:bg-background-light focus:outline-none focus:ring-2 focus:ring-primary/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="hidden sm:block">
              {viewModel.loading ? 'Carregando...' : viewModel.user?.name || 'Usuário'}
            </span>
            <FiChevronDown
              size={20}
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
                className="absolute right-0 top-full z-20 mt-2 w-full rounded-xl bg-background-primary shadow-strong"
              >
                <motion.button
                  onClick={() => {
                    viewModel.handleLogout()
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-6 py-3 text-base font-semibold text-text transition-all duration-200 hover:bg-primary hover:text-background-primary focus:outline-none"
                  whileHover={{}}
                >
                  <FiLogOut size={20} />
                  Sair
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

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
    </motion.header>
  )
}

export default Header
