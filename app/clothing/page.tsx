'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Plus, Minus, ShoppingCart } from 'lucide-react'
import { useCart } from '../../components/CartContext'

interface Product {
  id: string
  name: string
  price: number
  image: string
  colors: string[]
  designs: string[]
  sizes: string[]
}

const products: Product[] = [
  {
    id: 'shirt',
    name: 'True North T-Shirt',
    price: 15,
    image: '/shirt.jpg',
    colors: ['Black', 'White', 'Gray'],
    designs: ['Logo', 'Moose', 'Black Design', 'Custom'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'hat',
    name: 'True North Hat',
    price: 20,
    image: '/hat.jpg',
    colors: ['Black', 'Red', 'White'],
    designs: ['Moose Design', 'Logo'],
    sizes: ['One Size']
  }
]

export default function ClothingPage() {
  const { addToCart } = useCart()
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0])
  const [selectedColor, setSelectedColor] = useState('Black')
  const [selectedDesign, setSelectedDesign] = useState('Logo')
  const [selectedSize, setSelectedSize] = useState('M')
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    const item = {
      product: selectedProduct.name,
      color: selectedColor,
      design: selectedDesign,
      size: selectedSize,
      quantity: quantity,
      price: selectedProduct.price
    }
    addToCart(item)
    alert(`Added ${quantity} ${selectedProduct.name}(s) to cart!`)
  }

  return (
    <motion.div 
      className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
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
            Our Clothing Collection
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Premium quality clothing for the sober and free lifestyle
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Selection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Select Product</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  className={`bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 cursor-pointer transition-all hover:shadow-xl ${
                    selectedProduct.id === product.id
                      ? 'ring-2 ring-true-north-red'
                      : ''
                  }`}
                  onClick={() => setSelectedProduct(product)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      priority={index === 0}
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{product.name}</h3>
                  <p className="text-true-north-red font-bold">${product.price}</p>
                </motion.div>
              ))}
            </div>

            {/* Coming Soon */}
            <motion.div 
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Coming Fall 2024</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="aspect-square bg-gray-300 rounded-lg mb-2 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Sweater</span>
                  </div>
                  <p className="text-sm font-medium">Sweaters</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square bg-gray-300 rounded-lg mb-2 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Hoodie</span>
                  </div>
                  <p className="text-sm font-medium">Hoodies</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square bg-gray-300 rounded-lg mb-2 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Sweatpants</span>
                  </div>
                  <p className="text-sm font-medium">Sweatpants</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Customization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Customize Your {selectedProduct.name}</h2>
            
            {/* Color Selection */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Color</h3>
              <div className="flex flex-wrap gap-3">
                {selectedProduct.colors.map((color) => (
                  <motion.button
                    key={color}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      selectedColor === color
                        ? 'border-true-north-red bg-true-north-red text-white'
                        : 'border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-true-north-red'
                    }`}
                    onClick={() => setSelectedColor(color)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {color}
                  </motion.button>
                ))}
              </div>
              {selectedColor === 'Black' && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  * Default color - no additional charge
                </p>
              )}
            </motion.div>

            {/* Design Selection */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Design</h3>
              <div className="flex flex-wrap gap-3">
                {selectedProduct.designs.map((design) => (
                  <motion.button
                    key={design}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      selectedDesign === design
                        ? 'border-true-north-red bg-true-north-red text-white'
                        : 'border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-true-north-red'
                    }`}
                    onClick={() => setSelectedDesign(design)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {design}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Size Selection */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Size</h3>
              <div className="flex flex-wrap gap-3">
                {selectedProduct.sizes.map((size) => (
                  <motion.button
                    key={size}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      selectedSize === size
                        ? 'border-true-north-red bg-true-north-red text-white'
                        : 'border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-true-north-red'
                    }`}
                    onClick={() => setSelectedSize(size)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Quantity */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Quantity</h3>
              <div className="flex items-center space-x-4">
                <motion.button
                  className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Minus className="h-4 w-4" />
                </motion.button>
                <span className="text-xl font-semibold w-12 text-center text-gray-900 dark:text-white">{quantity}</span>
                <motion.button
                  className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
                  onClick={() => setQuantity(quantity + 1)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Plus className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>

            {/* Price and Add to Cart */}
            <motion.div 
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">Total:</span>
                <span className="text-2xl font-bold text-true-north-red">
                  ${selectedProduct.price * quantity}
                </span>
              </div>
              <motion.button
                className="w-full bg-true-north-red hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                onClick={handleAddToCart}
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(220, 38, 38, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
