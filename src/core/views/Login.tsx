import React from 'react'
import HeaderLight from '../components/headerLight'

interface LoginProps {
  // props opcionais
}

const Login: React.FC<LoginProps> = () => {
  return (
    <>
      <HeaderLight />
      <h1 className="text-2xl font-bold">Login</h1>
      <p className="text-gray-600">Página Login gerada com snippet 🚀</p>
    </>
  )
}

export default Login
