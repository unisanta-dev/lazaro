import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { motion, AnimatePresence } from 'motion/react'
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
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')

  const { label: _label, textInput: _textInput } = styles()

  return (
    <div className="flex h-screen w-full flex-row items-center justify-center gap-24 p-4">
      <div className="flex h-2/4 w-2/6 rounded-3xl bg-slate-400"></div>
      <form className="flex h-2/4 w-2/6 flex-col justify-center gap-5">
        <FlutterInput label="Nome de Usuário" id="username" />
        <FlutterInput label="Digite sua senha" type="password" id="password" />
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
