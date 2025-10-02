import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { tv } from 'tailwind-variants'

interface LoginProps {
  // props opcionais
}

const styles = tv({
  slots: {
    label: 'flex flex-col',
    textInput:
      'h-10 select-none rounded-lg bg-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-600',
  },
})

const Login: React.FC<LoginProps> = () => {
  const [showPassword, setShowPassword] = useState(false)

  const { label: _label, textInput: _textInput } = styles()

  return (
    <div className="flex h-screen w-full flex-row items-center justify-center gap-24 p-4">
      <div className="flex h-2/4 w-2/6 rounded-3xl bg-slate-400"></div>
      <form className="flex h-2/4 w-2/6 flex-col justify-center gap-5">
        <label htmlFor="username" className={_label()}>
          Nome de Usuário
          <input type="text" name="username" id="username" className={_textInput()} />
        </label>
        <label htmlFor="password" className={_label()}>
          Senha
          <div className="relative w-full">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Digite sua senha"
              className="h-10 w-full rounded-lg bg-slate-500 px-3 pr-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-200 hover:text-white"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>
        </label>
        <div className="flex justify-between">
          <label htmlFor="remember-me">
            <input type="checkbox" name="continuarConectado" id="remember-me" />
            Continuar conectado
          </label>
          <a href="">Esqueceu a senha?</a>
        </div>
        <button type="submit" className="rounded bg-slate-500 p-4 text-base text-slate-50">
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login
