'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Users } from 'lucide-react'

const upcomingEvents = [
  {
    title: 'Sober Social Meetup',
    date: 'March 15, 2024',
    time: '6:00 PM - 8:00 PM',
    location: 'Community Center, Downtown',
    description: 'Join us for a casual meetup with others on their sobriety journey. Share stories, make connections, and enjoy alcohol-free refreshments.',
    attendees: 25
  },
  {
    title: 'Recovery Workshop: Finding Your True North',
    date: 'March 22, 2024',
    time: '2:00 PM - 4:00 PM',
    location: 'True North HQ',
    description: 'Interactive workshop focused on discovering your personal values and goals in recovery. Led by certified recovery coaches.',
    attendees: 15
  },
  {
    title: 'Art Therapy Session',
    date: 'March 29, 2024',
    time: '10:00 AM - 12:00 PM',
    location: 'Creative Arts Studio',
    description: 'Express yourself through art in a supportive environment. All skill levels welcome. Materials provided.',
    attendees: 12
  }
]

const pastEvents = [
  {
    title: 'True North Launch Party',
    date: 'February 14, 2024',
    description: 'Celebrated the official launch of True North with our community.',
    attendees: 50
  },
  {
    title: 'Mindfulness & Meditation Workshop',
    date: 'February 28, 2024',
    description: 'Learned techniques for staying present and managing stress in recovery.',
    attendees: 30
  }
]

export default function Events() {
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
            Community Events
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Connect, celebrate, and grow together in our sober community
          </motion.p>
        </motion.div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-true-north-red rounded-full p-2 mr-3">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-true-north-red">{event.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.attendees} attending</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <button className="btn-primary w-full">
                  RSVP Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="card bg-gray-50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>
                <p className="text-gray-600 mb-2">{event.description}</p>
                <div className="flex items-center text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="text-sm">{event.attendees} attended</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Hosting */}
        <div className="bg-true-north-black text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Host an Event</h2>
          <p className="text-lg mb-6 text-gray-300">
            Want to organize an event for the True North community? 
            We'd love to support your initiative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Propose an Event
            </a>
            <a href="mailto:events@truenorthclothing.com" className="btn-secondary">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
