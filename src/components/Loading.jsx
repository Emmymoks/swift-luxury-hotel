import React from 'react'
import { motion } from 'framer-motion'

export default function Loading(){
  return (
    <div className="w-full py-20 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          className="mx-auto w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-200 to-yellow-400 shadow-lg flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
            className="w-8 h-8 bg-white/90 rounded-sm"
          />
        </motion.div>
        <div className="text-sm text-gray-600 mt-4">Loading…</div>
      </div>
    </div>
  )
}
