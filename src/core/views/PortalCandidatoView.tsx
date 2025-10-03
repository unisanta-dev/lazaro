import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FiCheck, FiClock, FiX } from 'react-icons/fi'
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
        <div className="mx-auto max-w-7xl lg:max-w-[85vw]">
          {/* Welcome Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="relative">
              <h1 className="mb-4 text-3xl font-bold text-background-primary lg:text-4xl">
                Bem-vindo(a),{' '}
                {viewModel.loading ? 'Carregando...' : viewModel.user?.name || 'Usuário'}!
              </h1>
              <p className="text-lg text-background-primary/80 lg:text-xl">
                Acompanhe o status da sua inscrição e gerencie seus dados.
              </p>
            </div>
          </motion.div>

          {/* Seletor de processos melhorado */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <div className="flex items-center gap-3">
                <span className="text-xl font-semibold text-background-primary">
                  Processo Selecionado
                </span>
              </div>
              <div className="relative">
                <select
                  className="w-full min-w-[200px] rounded-xl border-2 border-background-primary/30 bg-background-primary/15 px-6 py-3 text-background-primary backdrop-blur-sm transition-all duration-200 focus:border-background-primary focus:bg-background-primary/25 focus:outline-none sm:w-auto [&>option]:bg-background-primary [&>option]:text-text"
                  value={viewModel.selectedProcess}
                  onChange={e => viewModel.handleProcessSelection(e.target.value)}
                >
                  <option value="">Selecione</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Cards principais */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Card esquerdo - Detalhes da inscrição */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-background-primary to-background-light shadow-strong transition-all duration-300 hover:shadow-xl"
            >
              {/* Decorative elements */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 transition-all duration-300 group-hover:scale-110"></div>
              <div className="absolute -bottom-5 -left-5 h-20 w-20 rounded-full bg-gradient-to-br from-accent/10 to-primary/10 transition-all duration-300 group-hover:scale-110"></div>

              {/* Header do card */}
              <div className="relative rounded-t-3xl bg-gradient-to-r from-primary to-secondary px-8 py-6">
                <div className="flex items-center justify-center gap-3">
                  <h2 className="text-center text-xl font-bold text-background-primary lg:text-2xl">
                    Detalhes da Inscrição
                  </h2>
                </div>
              </div>

              {/* Conteúdo do card */}
              <div className="relative p-8 lg:p-10">
                {/* Seção Dados */}
                <div className="mb-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold text-text lg:text-2xl">Dados</h3>
                    </div>
                    <motion.button
                      onClick={viewModel.openEditModal}
                      className="flex items-center gap-2 rounded-xl border-2 border-primary/20 bg-primary/5 px-4 py-2 text-base font-medium text-primary transition-all duration-200 hover:border-primary hover:bg-primary hover:text-background-primary hover:shadow-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Editar
                    </motion.button>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 rounded-xl bg-background-light/50 p-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-text/70">Curso</label>
                        <p className="text-lg font-semibold text-text">
                          {viewModel.candidateData.course}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-xl bg-background-light/50 p-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-text/70">Modalidade</label>
                        <p className="text-lg font-semibold text-text">
                          {viewModel.candidateData.modality}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-xl bg-background-light/50 p-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-text/70">Campus</label>
                        <p className="text-lg font-semibold text-text">
                          {viewModel.candidateData.campus}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-xl bg-background-light/50 p-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-text/70">
                          Forma de Ingresso
                        </label>
                        <p className="text-lg font-semibold text-text">
                          {viewModel.candidateData.entryMethod}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card direito - Status da inscrição */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary shadow-strong transition-all duration-300 hover:shadow-xl"
            >
              {/* Decorative elements */}
              <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-background-primary/10 to-accent/10 transition-all duration-300 group-hover:scale-110"></div>
              <div className="absolute -bottom-5 -right-5 h-20 w-20 rounded-full bg-gradient-to-br from-background-primary/10 to-primary/10 transition-all duration-300 group-hover:scale-110"></div>

              {/* Header do card */}
              <div className="relative rounded-t-3xl bg-gradient-to-r from-background-primary/20 to-background-primary/10 px-8 py-6 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-3">
                  <h2 className="text-center text-xl font-bold text-background-primary lg:text-2xl">
                    Timeline do Processo
                  </h2>
                </div>
              </div>

              {/* Conteúdo do card */}
              <div className="relative p-8 lg:p-10">
                <div className="space-y-6">
                  {viewModel.timelineItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.8 + index * 0.2, duration: 0.6 }}
                      className="relative"
                    >
                      {/* Timeline line - apenas se não for o último item */}
                      {index < viewModel.timelineItems.length - 1 && (
                        <div
                          className={`absolute left-6 top-12 h-16 w-0.5 ${
                            index === 0 ? 'bg-white' : 'bg-accent'
                          }`}
                        ></div>
                      )}

                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-full shadow-medium ${
                            item.status === 'completed' ? 'bg-white' : 'bg-accent'
                          }`}
                        >
                          {item.status === 'completed' ? (
                            <FiCheck size={20} className="text-primary" />
                          ) : (
                            <FiClock size={20} className="text-white" />
                          )}
                        </div>

                        <div
                          className={`flex-1 rounded-xl p-4 ${
                            item.status === 'completed'
                              ? 'border-2 border-primary bg-transparent'
                              : 'bg-background-light'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3
                                className={`text-lg font-bold ${
                                  item.status === 'completed'
                                    ? 'text-background-primary'
                                    : 'text-text'
                                }`}
                              >
                                {item.title}
                              </h3>
                              <p
                                className={`text-sm ${
                                  item.status === 'completed'
                                    ? 'text-background-primary'
                                    : 'text-text'
                                }`}
                              >
                                {item.description}
                              </p>
                            </div>

                            {item.status === 'completed' ? (
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                                <FiCheck
                                  size={16}
                                  className="text-background-primary text-primary"
                                />
                              </div>
                            ) : item.hasAction ? (
                              <motion.button
                                onClick={() => viewModel.handleTimelineAction(item.id)}
                                className="flex items-center gap-2 rounded-lg bg-accent px-3 py-3 text-sm font-medium text-background-primary transition-all duration-200 hover:bg-primary hover:shadow-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                Realizar
                              </motion.button>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
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
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-text">Editar Dados da Inscrição</h3>
                    <p className="text-sm text-text/60">Atualize suas informações acadêmicas</p>
                  </div>
                </div>
                <motion.button
                  onClick={viewModel.closeEditModal}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background-light text-text/60 transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiX size={20} />
                </motion.button>
              </div>

              {/* Conteúdo do Modal */}
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-1">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-text">
                      Curso *
                    </label>
                    <select
                      className="w-full rounded-xl border-2 border-stroke bg-background-primary px-4 py-3 text-text transition-all duration-200 focus:border-primary focus:outline-none"
                      value={viewModel.tempEditData.course || ''}
                      onChange={e => viewModel.updateTempEditData({ course: e.target.value })}
                    >
                      <option value="">Selecione o curso</option>
                      <option value="Ciência da Computação">Ciência da Computação</option>
                      <option value="Engenharia de Software">Engenharia de Software</option>
                      <option value="Sistemas de Informação">Sistemas de Informação</option>
                      <option value="Engenharia da Computação">Engenharia da Computação</option>
                      <option value="Análise e Desenvolvimento de Sistemas">
                        Análise e Desenvolvimento de Sistemas
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-text">
                      Estado que deseja estudar *
                    </label>
                    <select
                      className="w-full rounded-xl border-2 border-stroke bg-background-primary px-4 py-3 text-text transition-all duration-200 focus:border-primary focus:outline-none"
                      value={viewModel.tempEditData.state || ''}
                      onChange={e => viewModel.updateTempEditData({ state: e.target.value })}
                    >
                      <option value="">Selecione o estado</option>
                      <option value="São Paulo">São Paulo</option>
                      <option value="Rio de Janeiro">Rio de Janeiro</option>
                      <option value="Minas Gerais">Minas Gerais</option>
                      <option value="Bahia">Bahia</option>
                      <option value="Paraná">Paraná</option>
                      <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                      <option value="Pernambuco">Pernambuco</option>
                      <option value="Ceará">Ceará</option>
                      <option value="Pará">Pará</option>
                      <option value="Santa Catarina">Santa Catarina</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-text">
                      Local de estudo *
                    </label>
                    <select
                      className="w-full rounded-xl border-2 border-stroke bg-background-primary px-4 py-3 text-text transition-all duration-200 focus:border-primary focus:outline-none"
                      value={viewModel.tempEditData.studyLocation || ''}
                      onChange={e =>
                        viewModel.updateTempEditData({ studyLocation: e.target.value })
                      }
                    >
                      <option value="">Selecione o local</option>
                      <option value="Santos - Centro">Santos - Centro</option>
                      <option value="Santos - Ponta da Praia">Santos - Ponta da Praia</option>
                      <option value="São Vicente">São Vicente</option>
                      <option value="Guarujá">Guarujá</option>
                      <option value="Cubatão">Cubatão</option>
                      <option value="Praia Grande">Praia Grande</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <motion.button
                    type="button"
                    onClick={viewModel.closeEditModal}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-stroke bg-background-primary p-4 text-base font-semibold text-text transition-all duration-200 hover:border-primary/30 hover:bg-background-light"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiX size={18} />
                    Cancelar
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={viewModel.handleSaveChanges}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary p-4 text-base font-semibold text-background-primary shadow-soft transition-all duration-200 hover:shadow-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiCheck size={18} />
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
