import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Build beautiful apps with AI
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Blink is the world's fastest way to build and deploy web and mobile apps. 
            Just describe what you want, and our AI will build it for you.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" className="px-8 py-6 text-lg">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg group">
              See Examples
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
          <motion.div 
            className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Blink AI Interface" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default Hero;