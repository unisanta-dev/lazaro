import React from 'react'
import { FlutterInput } from '../components'
import { motion, AnimatePresence } from 'motion/react'
import { FiX } from 'react-icons/fi'

import { useLoginViewModel } from '../viewmodels/LoginViewModel'

interface LoginProps {
  // props opcionais
}

const Login: React.FC<LoginProps> = () => {
  const viewModel = useLoginViewModel()

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Seção de Branding - Lado Esquerdo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative hidden flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary p-12 lg:flex lg:w-1/2"
      >
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-20 top-20 h-16 w-16 rounded-full bg-accent/20"></div>
          <div className="absolute right-32 top-40 h-8 w-8 rounded-full bg-background-primary/10"></div>
          <div className="absolute bottom-32 left-16 h-12 w-12 rounded-full bg-accent/15"></div>
          <div className="absolute bottom-20 right-20 h-6 w-6 rounded-full bg-background-primary/20"></div>
          <div className="absolute left-1/2 top-60 h-4 w-4 rounded-full bg-accent/25"></div>
        </div>

        {/* Logo e conteúdo */}
        <div className="relative z-10 text-center">
          <motion.img
            src="/UNISANTA_logo.png"
            alt="UNISANTA Logo"
            className="mx-auto mb-8 h-32 w-auto object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </div>
      </motion.div>

      {/* Seção do Formulário - Lado Direito */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex w-full flex-col items-center justify-center bg-background-primary p-8 lg:w-1/2 lg:p-12"
      >
        <div className="w-full max-w-md">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="mb-2 text-xx-large font-bold text-text">Fazer login</h2>
            <p className="mb-8 text-base text-text/70">Entre com suas credenciais de acesso</p>
          </motion.div>

          <motion.form
            className="space-y-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            onSubmit={e => {
              e.preventDefault()
              viewModel.submit()
            }}
          >
            <FlutterInput
              label="Nome de Usuário"
              id="username"
              value={viewModel.username}
              valueChanged={viewModel.setUsername}
            />
            <FlutterInput
              label="Digite sua senha"
              type="password"
              id="password"
              value={viewModel.password}
              valueChanged={viewModel.setPassword}
            />

            <div className="flex items-center justify-between text-sm">
              <label
                htmlFor="remember-me"
                className="flex cursor-pointer items-center gap-2 text-text"
              >
                <input
                  type="checkbox"
                  name="continuarConectado"
                  id="remember-me"
                  className="h-4 w-4 rounded border-2 border-stroke bg-background-primary text-primary transition-all duration-200 checked:border-primary checked:bg-primary focus:border-primary focus:ring-0"
                />
                Lembrar-me
              </label>
              <button
                type="button"
                onClick={() => viewModel.setIsForgotPasswordModalOpen(true)}
                className="font-semibold text-primary transition-colors duration-200 hover:text-secondary"
              >
                Esqueci minha senha
              </button>
            </div>

            <motion.button
              type="submit"
              className="w-full transform rounded-xl bg-primary p-4 text-base font-semibold text-background-primary shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Entrar
            </motion.button>
            {viewModel.error && (
              <motion.div
                className="flex items-center justify-center rounded-lg bg-red-100 p-4 text-sm text-red-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {viewModel.error}
              </motion.div>
            )}
          </motion.form>
        </div>
      </motion.div>

      {/* Modal de Recuperação de Senha */}
      <AnimatePresence>
        {viewModel.isForgotPasswordModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => viewModel.setIsForgotPasswordModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md rounded-2xl bg-background-primary px-12 py-8 shadow-strong"
              onClick={e => e.stopPropagation()}
            >
              {/* Header do Modal */}
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xx-large font-bold text-text">Recuperar Senha</h3>
                <button
                  onClick={() => viewModel.setIsForgotPasswordModalOpen(false)}
                  className="rounded-lg p-2 text-text/60 transition-colors duration-200 hover:bg-background-light hover:text-text"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Conteúdo do Modal */}
              <div className="mb-6">
                <p className="mb-6 text-base text-text/70">
                  Digite seu e-mail cadastrado e enviaremos um link para redefinir sua senha.
                </p>

                <form onSubmit={viewModel.handleForgotPassword} className="space-y-6">
                  <div className="relative w-full">
                    <input
                      type="email"
                      id="recovery-email"
                      name="recovery-email"
                      value={viewModel.email}
                      onChange={e => viewModel.setEmail(e.target.value)}
                      placeholder=" "
                      required
                      className="peer h-12 w-full rounded-xl border-2 border-stroke bg-background-primary px-4 text-text placeholder-gray-400 shadow-soft transition-all duration-200 focus:border-primary focus:outline-none focus:ring-0"
                    />
                    <label
                      htmlFor="recovery-email"
                      className={`absolute left-0 select-none rounded-lg ${viewModel.email ? 'top-[-4px] text-sm' : 'top-1/2'} ml-1 -translate-y-1/2 cursor-text bg-background-primary px-2 text-base font-medium text-text transition-all duration-300 peer-focus:top-[-4px] peer-focus:text-sm peer-focus:text-primary`}
                    >
                      E-mail
                    </label>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => viewModel.setIsForgotPasswordModalOpen(false)}
                      className="flex-1 rounded-xl border-2 border-stroke bg-background-primary p-4 text-base font-semibold text-text transition-all duration-200 hover:bg-background-light"
                    >
                      Cancelar
                    </button>
                    <motion.button
                      type="submit"
                      className="flex-1 rounded-xl bg-primary p-4 text-base font-semibold text-background-primary shadow-soft transition-all duration-200 hover:bg-secondary hover:shadow-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Enviar
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Login
