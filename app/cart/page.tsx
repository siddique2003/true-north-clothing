'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react'
import { useCart } from '../../components/CartContext'

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart()

  if (items.length === 0) {
    return (
      <motion.div 
        className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div
              className="w-24 h-24 mx-auto mb-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-true-north-red to-red-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Your Cart is Empty
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Start shopping to add items to your cart
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link href="/clothing">
                <motion.button
                  className="bg-true-north-red hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center mx-auto"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(220, 38, 38, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Start Shopping
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="flex items-center justify-between mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-true-north-red to-red-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Shopping Cart
            </motion.h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          
          <Link href="/clothing">
            <motion.button
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-true-north-red transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Continue Shopping
            </motion.button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {items.map((item, index) => (
                <motion.div
                  key={`${item.product}-${item.color}-${item.design}-${item.size}`}
                  className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  layout
                >
                  <div className="flex items-center space-x-6">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.product.includes('Shirt') ? '/shirt.jpg' : '/hat.jpg'}
                        alt={item.product}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {item.product}
                      </h3>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <p>Color: <span className="font-medium">{item.color}</span></p>
                        <p>Design: <span className="font-medium">{item.design}</span></p>
                        <p>Size: <span className="font-medium">{item.size}</span></p>
                      </div>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <motion.button
                        className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Minus className="h-4 w-4" />
                      </motion.button>
                      
                      <span className="text-lg font-semibold w-8 text-center text-gray-900 dark:text-white">
                        {item.quantity}
                      </span>
                      
                      <motion.button
                        className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Plus className="h-4 w-4" />
                      </motion.button>
                    </div>
                    
                    {/* Price and Remove */}
                    <div className="text-right">
                      <p className="text-lg font-bold text-true-north-red mb-2">
                        ${item.price * item.quantity}
                      </p>
                      <motion.button
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        onClick={() => removeFromCart(item.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Trash2 className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Order Summary */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal ({getTotalItems()} items)</span>
                  <span>${getTotalPrice()}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
                <hr className="border-gray-200 dark:border-gray-700" />
                <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white">
                  <span>Total</span>
                  <span className="text-true-north-red">${getTotalPrice()}</span>
                </div>
              </div>
              
              <Link href="/checkout">
                <motion.button
                  className="w-full bg-true-north-red hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(220, 38, 38, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Proceed to Checkout
                </motion.button>
              </Link>
              
              <motion.div 
                className="mt-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Link href="/clothing">
                  <motion.button
                    className="text-true-north-red hover:text-red-700 font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Continue Shopping
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
