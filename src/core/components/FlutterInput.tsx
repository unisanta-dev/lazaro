import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { motion, AnimatePresence } from 'motion/react'

interface FlutterInputProps {
  id: string
  label: string
  value: string
  valueChanged: (newValue: string) => void
  type?: 'text' | 'password'
}

const FlutterInput: React.FC<FlutterInputProps> = ({
  id,
  label,
  value,
  valueChanged,
  type = 'text',
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative w-full">
      <input
        type={type === 'password' && !showPassword ? 'password' : 'text'}
        id={id}
        name={id}
        value={value}
        onChange={e => valueChanged(e.target.value)}
        placeholder=" "
        className="peer h-12 w-full rounded-xl border-2 border-stroke bg-background-primary px-4 text-text placeholder-gray-400 shadow-soft transition-all duration-200 focus:border-primary focus:outline-none focus:ring-0"
      />
      <label
        htmlFor={id}
        className={`absolute left-0 select-none rounded-lg ${value ? 'top-[-4px] text-sm' : 'top-1/2'} ml-1 -translate-y-1/2 cursor-text bg-background-primary px-2 text-base font-medium text-text transition-all duration-300 peer-focus:top-[-4px] peer-focus:text-sm peer-focus:text-primary`}
      >
        {label}
      </label>
      {type == 'password' && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md p-1 text-text transition-colors duration-200 hover:bg-background-light hover:text-primary"
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
