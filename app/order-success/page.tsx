'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, Mail, Truck, Calendar } from 'lucide-react'

export default function OrderSuccessPage() {
  const orderNumber = `TN-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
  
  return (
    <motion.div 
      className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Success Icon */}
        <motion.div
          className="w-24 h-24 mx-auto mb-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="w-12 h-12 text-green-600" />
        </motion.div>
        
        {/* Success Message */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Order Confirmed!
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Thank you for supporting True North! Your order has been successfully placed.
        </motion.p>

        {/* Order Details */}
        <motion.div 
          className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Order Details</h2>
          
          <div className="space-y-4 text-left">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Order Number:</span>
              <span className="font-semibold text-true-north-red">{orderNumber}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Order Date:</span>
              <span className="font-semibold">{new Date().toLocaleDateString()}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Payment Status:</span>
              <span className="font-semibold text-green-600">Paid</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Estimated Delivery:</span>
              <span className="font-semibold">
                {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
            <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Confirmation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              You'll receive an order confirmation email within 5 minutes
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
            <Truck className="w-8 h-8 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Processing</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your order will be processed and shipped within 1-2 business days
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
            <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tracking</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              You'll receive tracking information once your order ships
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/clothing">
              <motion.button
                className="bg-true-north-red hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(220, 38, 38, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Continue Shopping
              </motion.button>
            </Link>
            
            <Link href="/">
              <motion.button
                className="border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Home
              </motion.button>
            </Link>
          </div>
          
          <motion.p 
            className="text-sm text-gray-500 dark:text-gray-400 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Questions about your order? <Link href="/contact" className="text-true-north-red hover:underline">Contact us</Link>
          </motion.p>
        </motion.div>

        {/* Thank You Message */}
        <motion.div 
          className="mt-12 p-6 bg-gradient-to-r from-true-north-red/10 to-red-400/10 rounded-2xl border border-true-north-red/20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Thank You for Supporting Our Mission
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Your purchase helps support the sober community and our mission to provide 
            resources for those on their journey to freedom and recovery.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
