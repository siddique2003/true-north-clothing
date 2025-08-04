'use client'

import Link from 'next/link'
import { ArrowRight, Shirt, Crown, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 dark:bg-black text-white py-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-true-north-red/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              <motion.span 
                className="text-gradient text-6xl md:text-8xl"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                TRUE NORTH
              </motion.span>
              <br />
              <motion.span
                className="text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Sober & Free
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-300"
              variants={itemVariants}
            >
              Premium clothing for those living the sober and free lifestyle
            </motion.p>
            
            <motion.p 
              className="text-lg mb-8 text-gray-400"
              variants={itemVariants}
            >
              EST 2024
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/clothing" className="btn-primary inline-flex items-center glow-effect">
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Shop Now
                  </motion.span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/about" className="btn-secondary inline-flex items-center">
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border-2 border-true-north-red/30 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity }
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 border-2 border-true-north-accent/30 rounded-full"
          animate={{ 
            rotate: -360,
            y: [0, -20, 0]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity }
          }}
        />
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              What We <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Quality clothing with meaningful designs
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center animated-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="bg-true-north-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 10px 25px rgba(220, 38, 38, 0.4)"
                }}
                animate={{ 
                  boxShadow: [
                    "0 0 0 rgba(220, 38, 38, 0)",
                    "0 0 20px rgba(220, 38, 38, 0.3)",
                    "0 0 0 rgba(220, 38, 38, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Shirt className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Premium Shirts</h3>
              <p className="text-gray-600 dark:text-gray-400">
                High-quality shirts with custom designs. Default black color with logo, moose, or custom designs.
              </p>
              <motion.p 
                className="text-true-north-red font-bold mt-2 text-2xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                $15
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="text-center animated-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="bg-true-north-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 10px 25px rgba(220, 38, 38, 0.4)"
                }}
                animate={{ 
                  boxShadow: [
                    "0 0 0 rgba(220, 38, 38, 0)",
                    "0 0 20px rgba(220, 38, 38, 0.3)",
                    "0 0 0 rgba(220, 38, 38, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <Crown className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Custom Hats</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Stylish hats featuring the iconic moose design and True North branding.
              </p>
              <motion.p 
                className="text-true-north-red font-bold mt-2 text-2xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                $20
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="text-center animated-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="bg-gray-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgb(220, 38, 38)"
                }}
                transition={{ duration: 0.3 }}
              >
                <Users className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Coming Fall</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sweaters, hoodies, and sweatpants will be available in Fall 2024.
              </p>
              <motion.p 
                className="text-gray-500 font-bold mt-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                Coming Soon
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Join the <span className="text-gradient">True North</span> Community
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Connect with others on the journey to sobriety and freedom
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/events" className="btn-primary">
                  View Events
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/team" className="btn-secondary">
                  Meet the Team
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
