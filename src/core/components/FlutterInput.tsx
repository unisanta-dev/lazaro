import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { motion, AnimatePresence } from 'motion/react'

interface FlutterInputProps {
  label: string
  type?: 'text' | 'password'
}

const FlutterInput: React.FC<FlutterInputProps> = ({ label, type = 'text' }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')

  return (
    <div className="relative w-full">
      <input
        type={type === 'password' && !showPassword ? 'password' : 'text'}
        id="password"
        name="password"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder=" "
        className="peer h-10 w-full rounded-lg border-2 border-gray-400 bg-white px-3 text-gray-950 placeholder-gray-400 focus:outline-none focus:ring-blue-400"
      />
      <label
        htmlFor="password"
        className={`absolute left-0 rounded-lg ${username ? 'top-[-4px] text-sm' : 'top-1/2'} ml-1 -translate-y-1/2 cursor-text bg-white px-2 text-base text-gray-700 transition-all duration-300 peer-focus:top-[-4px] peer-focus:text-sm peer-focus:text-blue-500`}
      >
        {label}
      </label>
      {type == 'password' && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 hover:text-gray-950"
        >
          <AnimatePresence mode="wait" initial={false}>
            {showPassword ? (
              <motion.div
                key="eye-off"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 20 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiEyeOff size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="eye"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 20 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiEye size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      )}
    </div>
  )
}

export default FlutterInput
