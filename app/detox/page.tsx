'use client'
import { motion } from 'framer-motion'
import { Phone, Heart, Shield, Users, ExternalLink } from 'lucide-react'

const resources = [
  {
    name: 'SAMHSA National Helpline',
    phone: '1-800-662-4357',
    description: 'Free, confidential, 24/7 treatment referral service for individuals and families facing mental health and/or substance use disorders.',
    website: 'https://www.samhsa.gov/find-help/national-helpline'
  },
  {
    name: 'National Suicide Prevention Lifeline',
    phone: '988',
    description: 'Free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week.',
    website: 'https://suicidepreventionlifeline.org/'
  },
  {
    name: 'Crisis Text Line',
    phone: 'Text HOME to 741741',
    description: 'Free crisis support via text message 24/7. Trained crisis counselors provide support for those in crisis.',
    website: 'https://www.crisistextline.org/'
  },
  {
    name: 'Alcoholics Anonymous',
    phone: 'Check local listings',
    description: 'Fellowship of people who share their experience, strength and hope with each other to solve their common problem.',
    website: 'https://www.aa.org/'
  }
]

const treatmentTypes = [
  {
    title: 'Inpatient Treatment',
    description: 'Residential treatment programs that provide 24-hour care in a controlled environment.',
    icon: Shield
  },
  {
    title: 'Outpatient Treatment',
    description: 'Treatment programs that allow you to maintain your daily responsibilities while receiving care.',
    icon: Heart
  },
  {
    title: 'Support Groups',
    description: 'Peer support groups like AA, NA, and SMART Recovery that provide ongoing community support.',
    icon: Users
  },
  {
    title: 'Individual Therapy',
    description: 'One-on-one counseling to address personal challenges and develop coping strategies.',
    icon: Phone
  }
]

export default function DetoxPage() {
  return (
    <motion.div 
      className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Detox & <span className="text-true-north-red">Treatment</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Taking the first step toward recovery is brave. Here are resources to help you 
            or your loved ones find the support you need.
          </p>
        </div>

        {/* Emergency Notice */}
        <motion.div 
          className="bg-true-north-red text-white rounded-lg p-6 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex items-center mb-4">
            <Phone className="h-6 w-6 mr-3" />
            <h2 className="text-2xl font-bold">Need Immediate Help?</h2>
          </div>
          <p className="text-lg mb-4">
            If you or someone you know is in immediate danger or having thoughts of suicide, 
            please call 911 or go to your nearest emergency room.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Crisis Hotline: 988</p>
              <p>National Suicide Prevention Lifeline</p>
            </div>
            <div>
              <p className="font-semibold">Text: HOME to 741741</p>
              <p>Crisis Text Line</p>
            </div>
          </div>
        </motion.div>

        {/* Treatment Types */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Types of Treatment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <motion.div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="bg-true-north-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{type.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{type.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Helpful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{resource.name}</h3>
                  <a 
                    href={resource.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-true-north-red hover:text-red-700 dark:hover:text-red-400"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <div className="flex items-center mb-3">
                  <Phone className="h-5 w-5 text-true-north-red mr-2" />
                  <span className="font-semibold text-true-north-red">{resource.phone}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{resource.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Support Message */}
        <motion.div 
          className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">You Are Not Alone</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Recovery is a journey, and every journey begins with a single step. 
            The True North community is here to support you every step of the way. 
            Whether you're just starting to consider sobriety or you've been on this path for years, 
            you have a place in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/events" className="bg-true-north-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
              Join Our Community
            </a>
            <a href="/contact" className="border-2 border-true-north-red text-true-north-red dark:text-red-400 px-6 py-3 rounded-lg font-semibold hover:bg-true-north-red hover:text-white dark:hover:text-white transition-colors duration-300">
              Reach Out for Support
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
