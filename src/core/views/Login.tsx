import React from 'react'
import { FlutterInput } from '../components'
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
  const { label: _label, textInput: _textInput } = styles()

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8 bg-background-primary p-4 lg:flex-row lg:gap-24">
      <div className="flex h-1/3 w-full items-center justify-center rounded-3xl lg:h-2/4 lg:w-2/6">
        <img src="/logo.jpg" alt="UNISANTA Logo" className="h-32 w-auto object-contain lg:h-80" />
      </div>
      <form className="flex h-2/3 w-full flex-col justify-center gap-6 rounded-2xl p-6 lg:h-2/4 lg:w-2/6 lg:p-8">
        <FlutterInput label="Nome de Usuário" id="username" />
        <FlutterInput label="Digite sua senha" type="password" id="password" />
        <div className="flex items-center justify-between text-sm">
          <label htmlFor="remember-me" className="flex cursor-pointer items-center gap-2 text-text">
            <input
              type="checkbox"
              name="continuarConectado"
              id="remember-me"
              className="h-4 w-4 rounded border-2 border-stroke bg-background-primary text-primary transition-all duration-200 checked:border-primary checked:bg-primary focus:border-primary focus:ring-0"
            />
            Continuar conectado
          </label>
          <a
            href=""
            className="font-semibold text-primary transition-colors duration-200 hover:text-secondary"
          >
            Esqueceu a senha?
          </a>
        </div>
        <button
          type="submit"
          className="transform rounded-xl bg-primary p-4 text-base font-semibold text-background-primary shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-medium"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login
