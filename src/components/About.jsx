import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      name: 'Naman',
      role: 'Club President',
      image: '/team/president.jpg'
    },
    {
      name: 'Naman',
      role: 'Technical Lead',
      image: '/team/tech-lead.jpg'
    },
    {
      name: 'Naman',
      role: 'Events Coordinator',
      image: '/team/events.jpg'
    },
    {
      name: 'Naman',
      role: 'Creative Director',
      image: '/team/creative.jpg'
    }
  ];

  return (
    <section id="about" className="h-screen py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">About GraphiX3D</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            GraphiX3D is a community of passionate 3D artists, developers, and enthusiasts.
            We're dedicated to exploring the boundaries of computer graphics and helping
            members grow their skills in 3D modeling, animation, and game development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary/50 backdrop-blur-sm p-8 rounded-lg border border-accent/20"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To foster creativity and technical excellence in 3D graphics through
              collaborative learning, hands-on projects, and industry connections.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary/50 backdrop-blur-sm p-8 rounded-lg border border-accent/20"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Our History</h3>
            <p className="text-gray-300">
              Founded in 2020, GraphiX3D has grown from a small group of enthusiasts
              to a thriving community of creators, innovators, and future industry leaders.
            </p>
          </motion.div>
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Meet Our Team
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-800 border-2 border-accent">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
              <p className="text-accent">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;