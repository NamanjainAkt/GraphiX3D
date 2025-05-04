import { motion } from 'framer-motion';

const WhyJoin = () => {
  const benefits = [
    {
      title: 'Mentorship',
      description: 'Get guidance from experienced professionals and senior members',
      icon: '👥'
    },
    {
      title: 'Portfolio Building',
      description: 'Create impressive projects to showcase your skills',
      icon: '🎨'
    },
    {
      title: 'Workshops',
      description: 'Regular hands-on sessions to learn new technologies and techniques',
      icon: '💻'
    },
    {
      title: 'Guest Talks',
      description: 'Insights from industry experts and professionals',
      icon: '🎤'
    }
  ];

  return (
    <section id="why-join" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Why Join GraphiX3D?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-primary/50 backdrop-blur-sm p-6 rounded-lg border border-accent/20 hover:border-accent/40 transition-colors"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;