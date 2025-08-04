'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Elliot Mcleod',
    image: '/Elliot Mcleod.jpg'
  },
  {
    name: 'Jon and his mother',
    image: '/Jon and his mother.jpg'
  },
  {
    name: 'Saulteaux Brandon',
    image: '/Saulteaux Brandon.jpg'
  },
  {
    name: 'Shaun',
    image: '/Shaun.jpg'
  }
]

export default function TeamPage() {
  return (
    <motion.div 
      className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-true-north-red to-red-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Meet the Team
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            The passionate individuals behind True North
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 mb-16 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                whileHover={{ 
                  boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)" 
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority={index < 2}
                />
              </motion.div>
              <motion.h3 
                className="text-lg font-semibold text-gray-900 dark:text-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {member.name}
              </motion.h3>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="card text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Join Our <span className="text-gradient">Team</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            We're always looking for passionate individuals who share our mission 
            of supporting the sober community.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="/contact" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a 
              href="mailto:careers@truenorthclothing.com" 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
