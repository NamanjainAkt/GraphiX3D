import { motion } from 'framer-motion';

const Contact = () => {
  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Discord', icon: '💬', url: '#' }
  ];

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-primary/95 h-screen mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-8 py-10 mt-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-14"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Contact Us</h3>
              <p className="text-gray-300">
                Have questions about joining GraphiX3D or want to collaborate?<br /> We'd love
                to hear from you!
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Meeting Times</h4>
              <p className="text-gray-300">
                We meet every Wednesday at 6:00 PM in the Digital Arts Lab
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="text-2xl hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.form 
              className="space-y-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-primary/50 border border-accent/20 rounded-lg focus:outline-none focus:border-accent text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-primary/50 border border-accent/20 rounded-lg focus:outline-none focus:border-accent text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 bg-primary/50 border border-accent/20 rounded-lg focus:outline-none focus:border-accent text-white resize-none"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-accent hover:bg-accent/80 text-primary font-bold py-3 px-8 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;