'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white border-t border-gray-800 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.div 
              className="flex items-center mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span 
                className="text-true-north-red text-2xl font-bold"
                animate={{ 
                  textShadow: [
                    '0 0 5px rgba(220, 38, 38, 0.5)',
                    '0 0 10px rgba(220, 38, 38, 0.8)',
                    '0 0 5px rgba(220, 38, 38, 0.5)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                TRUE NORTH
              </motion.span>
              <span className="text-gray-300 text-sm ml-2">Sober & Free</span>
            </motion.div>
            <motion.p 
              className="text-gray-400 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Premium clothing for those living the sober and free lifestyle. 
              Established 2024.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.a 
                href="https://www.facebook.com/share/197rnkxpp9/?mibextid=wwXIfr" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-true-north-red transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-true-north-red transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-true-north-red transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/clothing" className="text-gray-400 hover:text-true-north-red transition-colors">Clothing</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/about" className="text-gray-400 hover:text-true-north-red transition-colors">About Us</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/contact" className="text-gray-400 hover:text-true-north-red transition-colors">Contact</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/events" className="text-gray-400 hover:text-true-north-red transition-colors">Events</Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/detox" className="text-gray-400 hover:text-true-north-red transition-colors">Detox & Treatment</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/team" className="text-gray-400 hover:text-true-north-red transition-colors">Meet the Team</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/art" className="text-gray-400 hover:text-true-north-red transition-colors">Art Submission</Link>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-gray-800 dark:border-gray-900 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <motion.p 
            className="text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            2024 True North - Sober & Free. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
