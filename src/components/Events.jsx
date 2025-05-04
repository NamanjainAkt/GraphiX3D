import { motion } from 'framer-motion';

const Events = () => {
  const events = [
    {
      title: '3D Modeling Workshop',
      date: '2024-02-15',
      time: '14:00',
      description: 'Learn the basics of 3D modeling using industry-standard tools',
      image: '/events/workshop.jpg',
      type: 'Workshop'
    },
    {
      title: 'Game Development Talk',
      date: '2024-02-20',
      time: '16:00',
      description: 'Industry experts share insights about game development careers',
      image: '/events/talk.jpg',
      type: 'Guest Talk'
    },
    {
      title: 'Animation Showcase',
      date: '2024-02-25',
      time: '15:00',
      description: 'Members present their latest animation projects',
      image: '/events/showcase.jpg',
      type: 'Showcase'
    }
  ];

  return (
    <section id="events" className="py-20 bg-primary/95">
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
                <button className="bg-accent/20 hover:bg-accent/30 text-accent font-semibold py-2 px-4 rounded-full transition-colors w-full">
                  Learn More
                </button>
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