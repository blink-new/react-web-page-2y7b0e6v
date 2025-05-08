import { Button } from './ui/button';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Start building your next great idea today
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of developers and companies who are building faster and better with Blink.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="bg-white text-primary-700 hover:bg-white/90 px-8 py-6 text-lg">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Schedule a Demo
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute left-0 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute right-0 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl opacity-20 -z-10"></div>
    </section>
  );
};

export default CTASection;