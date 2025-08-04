'use client'

import { motion } from 'framer-motion'
import { Heart, Target, Users } from 'lucide-react'

export default function About() {
  return (
    <motion.div 
      className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
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
            About True North
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Sober & Free - Premium clothing for those living an authentic, substance-free lifestyle
          </motion.p>
        </motion.div>

        {/* Mission Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="bg-true-north-red dark:bg-true-north-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-true-north-red dark:text-true-north-red">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To create meaningful clothing that celebrates and supports those on their journey 
                to sobriety and personal freedom.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="bg-true-north-red dark:bg-true-north-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-true-north-red dark:text-true-north-red">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                A world where everyone feels proud to wear their commitment to sobriety 
                and inspire others on their own path to freedom.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="bg-true-north-red dark:bg-true-north-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-true-north-red dark:text-true-north-red">Our Community</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building a supportive community of individuals who choose sobriety 
                and celebrate their strength together.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Story Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                True North was born from the understanding that recovery is not just about what you give up, 
                but about what you gain. Our founders recognized the need for clothing that represents 
                strength, community, and the courage to choose a different path.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                The name "True North" represents finding your authentic direction in life - that internal 
                compass that guides you toward health, happiness, and freedom. Our iconic designs featuring 
                the moose, mountains, and maple leaf celebrate the strength found in nature and the 
                Canadian spirit of resilience.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Every piece we create is designed with intention, quality, and respect for the journey 
                each person is on. When you wear True North, you're not just wearing clothing - you're 
                wearing a statement of strength and a symbol of hope.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="text-lg font-semibold mb-2 text-true-north-red dark:text-true-north-red">Authenticity</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Being true to yourself and your journey
                </p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="text-lg font-semibold mb-2 text-true-north-red dark:text-true-north-red">Community</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Supporting each other through every step
                </p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="text-lg font-semibold mb-2 text-true-north-red dark:text-true-north-red">Quality</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating products that last and inspire
                </p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="text-lg font-semibold mb-2 text-true-north-red dark:text-true-north-red">Hope</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Believing in the power of positive change
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}
