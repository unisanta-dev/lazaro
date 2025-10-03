import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FiEdit, FiCheck, FiAlertCircle, FiX } from 'react-icons/fi'
import { usePortalCandidatoViewModel } from '../viewmodels/PortalCandidatoViewModel'
import { Header } from '../components'

interface MainProps {
  // props opcionais
}

const Main: React.FC<MainProps> = () => {
  const viewModel = usePortalCandidatoViewModel()
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/background-portalcandidato.png)' }}
    >
      {/* Header */}
      <Header />

      {/* Conteúdo principal */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="px-8 py-10 lg:px-8"
      >
        <div className="mx-auto max-w-7xl lg:max-w-[80vw]">
          {/* Seletor de processos */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-8"
          >
            <div className="sm flex flex-col items-center gap-4 sm:flex-row">
              <span className="text-lg font-semibold text-background-primary">Processo Aberto</span>
              <select className="w-full rounded-lg border-2 border-background-primary/20 bg-background-primary/10 px-4 py-2 text-background-primary focus:border-background-primary focus:outline-none sm:w-auto [&>option]:bg-background-primary [&>option]:text-text">
                <option>Selecione</option>
              </select>
            </div>
          </motion.div>

          {/* Cards principais */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Card esquerdo - Detalhes da inscrição */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="rounded-2xl bg-background-primary shadow-strong"
            >
              {/* Header do card */}
              <div className="rounded-t-2xl bg-primary px-6 py-4">
                <h2 className="text-center text-xl font-bold text-background-primary lg:text-2xl">
                  Detalhes da inscrição
                </h2>
              </div>

              {/* Conteúdo do card */}
              <div className="p-8 lg:p-12">
                {/* Seção Dados */}
                <div className="mb-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-text lg:text-2xl">Dados</h3>
                    <button
                      onClick={viewModel.openEditModal}
                      className="flex items-center gap-2 rounded-lg border border-stroke bg-background-light px-4 py-2 text-sm font-medium text-text transition-all duration-200 hover:border-primary hover:bg-primary hover:text-background-primary hover:shadow-medium"
                    >
                      <FiEdit size={16} />
                      Editar
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-base font-medium text-text/70 lg:text-lg">
                        Curso
                      </label>
                      <p className="text-lg font-semibold text-text lg:text-xl">Selecione</p>
                    </div>
                    <div>
                      <label className="block text-base font-medium text-text/70 lg:text-lg">
                        Modalidade
                      </label>
                      <p className="text-lg font-semibold text-text lg:text-xl">Selecione</p>
                    </div>
                    <div>
                      <label className="block text-base font-medium text-text/70 lg:text-lg">
                        Campus
                      </label>
                      <p className="text-lg font-semibold text-text lg:text-xl">Selecione</p>
                    </div>
                    <div>
                      <label className="block text-base font-medium text-text/70 lg:text-lg">
                        Forma de ingresso
                      </label>
                      <p className="text-lg font-semibold text-text lg:text-xl">Selecione</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card direito - Status da inscrição */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="rounded-2xl bg-primary shadow-strong"
            >
              {/* Header do card */}
              <div className="rounded-t-2xl bg-primary px-6 py-4">
                <h2 className="text-center text-xl font-bold text-background-primary lg:text-2xl">
                  Acompanhe aqui o status da sua inscrição
                </h2>
              </div>

              {/* Conteúdo do card */}
              <div className="p-8 lg:p-12">
                <div className="space-y-4">
                  {/* Status 1 - Inscrição Concluída */}
                  <div className="rounded-xl bg-accent/20 p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background-primary">
                        <FiCheck size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-background-primary lg:text-2xl">
                          Inscrição
                        </h3>
                        <p className="text-base text-background-primary/80 lg:text-lg">Concluída</p>
                      </div>
                    </div>
                  </div>

                  {/* Status 2 - Prova online */}
                  <div className="rounded-xl bg-background-primary p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                        <FiAlertCircle size={20} className="text-background-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-text lg:text-2xl">Prova online</h3>
                        <p className="text-base text-text/70 lg:text-lg">Pendente</p>
                      </div>
                      <button className="rounded-lg border border-stroke bg-background-light px-4 py-2 text-sm font-medium text-text transition-all duration-200 hover:border-primary hover:bg-primary hover:text-background-primary hover:shadow-medium">
                        Verificar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.main>

      {/* Modal de Edição */}
      <AnimatePresence>
        {viewModel.isEditModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={viewModel.closeEditModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl rounded-2xl bg-background-primary px-12 py-8 shadow-strong"
              onClick={e => e.stopPropagation()}
            >
              {/* Header do Modal */}
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xx-large font-bold text-text">Editar Dados da Inscrição</h3>
                <button
                  onClick={viewModel.closeEditModal}
                  className="rounded-lg p-2 text-text/60 transition-colors duration-200 hover:bg-background-light hover:text-text"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Conteúdo do Modal */}
              <div className="space-y-6">
                <p className="text-base text-text/70">
                  Edite os dados da sua inscrição conforme necessário.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-text">Curso</label>
                    <select className="w-full rounded-xl border-2 border-stroke bg-background-primary px-4 py-3 text-text transition-all duration-200 focus:border-primary focus:outline-none">
                      <option>Selecione</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-text">Modalidade</label>
                    <select className="w-full rounded-xl border-2 border-stroke bg-background-primary px-4 py-3 text-text transition-all duration-200 focus:border-primary focus:outline-none">
                      <option>Selecione</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-text">Campus</label>
                    <select className="w-full rounded-xl border-2 border-stroke bg-background-primary px-4 py-3 text-text transition-all duration-200 focus:border-primary focus:outline-none">
                      <option>Selecione</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-text">
                      Forma de ingresso
                    </label>
                    <select className="w-full rounded-xl border-2 border-stroke bg-background-primary px-4 py-3 text-text transition-all duration-200 focus:border-primary focus:outline-none">
                      <option>Selecione</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={viewModel.closeEditModal}
                    className="flex-1 rounded-xl border-2 border-stroke bg-background-primary p-4 text-base font-semibold text-text transition-all duration-200 hover:bg-background-light"
                  >
                    Cancelar
                  </button>
                  <motion.button
                    type="button"
                    className="flex-1 rounded-xl bg-primary p-4 text-base font-semibold text-background-primary shadow-soft transition-all duration-200 hover:bg-secondary hover:shadow-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Salvar Alterações
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Main
