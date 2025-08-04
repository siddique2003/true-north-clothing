'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, Image, FileText, Send, CheckCircle, Award } from 'lucide-react'

export default function ArtSubmission() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
    category: 'design',
    file: null as File | null
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Art submission:', formData)
    alert('Thank you for your submission! We\'ll review it and get back to you soon.')
    setFormData({ name: '', email: '', title: '', description: '', category: 'design', file: null })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        file: e.target.files[0]
      })
    }
  }

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
            Art Submission
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Share your creative vision with the True North community. We're always looking 
            for meaningful artwork that celebrates the journey to sobriety and freedom.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Guidelines */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Submission Guidelines</h2>
            
            <div className="space-y-6 mb-8">
              <div className="card">
                <div className="flex items-center mb-3">
                  <Image className="h-6 w-6 text-true-north-red mr-3" />
                  <h3 className="text-lg font-semibold">Artwork Types</h3>
                </div>
                <ul className="text-gray-600 space-y-1">
                  <li>• T-shirt designs</li>
                  <li>• Logo variations</li>
                  <li>• Inspirational graphics</li>
                  <li>• Recovery-themed artwork</li>
                  <li>• Photography</li>
                </ul>
              </div>

              <div className="card">
                <div className="flex items-center mb-3">
                  <Upload className="h-6 w-6 text-true-north-red mr-3" />
                  <h3 className="text-lg font-semibold">File Requirements</h3>
                </div>
                <ul className="text-gray-600 space-y-1">
                  <li>• High resolution (300 DPI minimum)</li>
                  <li>• Formats: PNG, JPG, SVG, AI, PSD</li>
                  <li>• Maximum file size: 10MB</li>
                  <li>• Original work only</li>
                </ul>
              </div>

              <div className="card">
                <div className="flex items-center mb-3">
                  <Award className="h-6 w-6 text-true-north-red mr-3" />
                  <h3 className="text-lg font-semibold">What We're Looking For</h3>
                </div>
                <ul className="text-gray-600 space-y-1">
                  <li>• Positive, uplifting messages</li>
                  <li>• Recovery and sobriety themes</li>
                  <li>• Nature and outdoor elements</li>
                  <li>• Canadian/Northern imagery</li>
                  <li>• Clean, professional designs</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Artist Recognition</h3>
              <p className="text-gray-600 mb-3">
                Selected artists will receive:
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Credit on our website and social media</li>
                <li>• Free merchandise featuring your design</li>
                <li>• Potential ongoing collaboration opportunities</li>
                <li>• Commission for commercial use</li>
              </ul>
            </div>
          </div>

          {/* Submission Form */}
          <div>
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Submit Your Artwork</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Artist Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-true-north-red focus:border-transparent"
                    placeholder="Your name or artist alias"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-true-north-red focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Artwork Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-true-north-red focus:border-transparent"
                    placeholder="Give your artwork a title"
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-true-north-red focus:border-transparent"
                  >
                    <option value="design">T-shirt Design</option>
                    <option value="logo">Logo Variation</option>
                    <option value="graphic">Inspirational Graphic</option>
                    <option value="photography">Photography</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-true-north-red focus:border-transparent"
                    placeholder="Describe your artwork and its inspiration..."
                  />
                </div>
                
                <div>
                  <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Artwork *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-true-north-red transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <input
                      type="file"
                      id="file"
                      name="file"
                      required
                      onChange={handleFileChange}
                      accept=".png,.jpg,.jpeg,.svg,.ai,.psd"
                      className="hidden"
                    />
                    <label htmlFor="file" className="cursor-pointer">
                      <span className="text-true-north-red font-medium">Click to upload</span>
                      <span className="text-gray-600"> or drag and drop</span>
                    </label>
                    <p className="text-sm text-gray-500 mt-2">
                      PNG, JPG, SVG, AI, PSD up to 10MB
                    </p>
                    {formData.file && (
                      <p className="text-sm text-true-north-red mt-2">
                        Selected: {formData.file.name}
                      </p>
                    )}
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Submit Artwork
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
