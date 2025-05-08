import { motion } from 'framer-motion';
import { defaultDonut } from '../assets/assets';
import Button from './button';

const Events = () => {
  const events = [
    {
      title: 'Default Donut',
      date: '04-05-2025 to 06-05-2025',
      time: '14:00',
      description: 'Learn the basics of 3D modeling using industry-standard tools',
      image: defaultDonut,
      type: 'Event'
    },
    {
      title: 'Advanced Animation Workshop',
      date: '10-05-2025 to 12-05-2025',
      time: '15:30',
      description: 'Deep dive into advanced animation techniques and principles',
      image: '/events/animation.jpg',
      type: 'Workshop'
    },
    {
      title: 'Game Development Hackathon',
      date: '20-05-2025 to 22-05-2025',
      time: '09:00',
      description: 'Create an amazing game in 48 hours with your team',
      image: '/events/hackathon.jpg',
      type: 'Competition'
    }
  ];

  return (
    <section id="events" className="h-screen py-20 bg-primary/95">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Upcoming Events
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-primary/50 backdrop-blur-sm rounded-lg overflow-hidden border border-accent/20 hover:border-accent/40 transition-all hover:transform hover:scale-105"
            >
              <div className="h-48 bg-gray-800 relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {event.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}{' '}
                  at {event.time}
                </p>
                <p className="text-gray-300 mb-6">{event.description}</p>
                <Button/>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-accent hover:bg-accent/80 text-primary font-bold py-3 px-8 rounded-full inline-flex items-center"
          >
            View All Events
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Events;